import {
  useStyled,
  // @ts-ignore
  type IAnimationDriverPlugin,
  // @ts-ignore
  type IAnimationResolver,
} from '@gluestack-style/react';
import React, { useMemo } from 'react';
import {
  deepMerge,
  deepMergeObjects,
  setObjectKeyValue,
  resolvedTokenization,
} from './utils';
import {
  Motion,
  AnimatePresence as MotionAnimatePresence,
} from '@legendapp/motion';
import { propertyTokenMap } from './propertyTokenMap';

function tokenizeAnimationPropsFromConfig(
  props: any = {},
  config: any,
  animationAliases: any,
  path: any = [],
  tokenizedAnimatedProps: any = {}
) {
  for (const prop in props) {
    if (Array.isArray(props[prop])) {
      path.push(prop);
      setObjectKeyValue(tokenizedAnimatedProps, path, props[prop]);
      path.pop();
    } else if (animationAliases[prop]) {
      path.push(prop);
      const tokenizedValue = resolvedTokenization(props[prop], config);
      setObjectKeyValue(tokenizedAnimatedProps, path, tokenizedValue);
      path.pop();
    } else if (typeof props[prop] === 'object') {
      path.push(prop);
      const tokenizedValue = resolvedTokenization(props[prop], config);
      setObjectKeyValue(tokenizedAnimatedProps, path, tokenizedValue);
      // path.pop();
      tokenizeAnimationPropsFromConfig(
        props[prop],
        config,
        animationAliases,
        path,
        tokenizedAnimatedProps
      );
      path.pop();
    } else {
      path.push(prop);
      setObjectKeyValue(tokenizedAnimatedProps, path, props[prop]);
      path.pop();
    }
  }

  return tokenizedAnimatedProps;
}

function getVariantProps(props: any, theme: any) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];

  const restProps = { ...props };

  const variantProps: any = {};
  variantTypes?.forEach((variant) => {
    if (props[variant]) {
      variantProps[variant] = props[variant];
      // delete restProps[variant];
    }
  });

  return {
    variantProps,
    restProps,
  };
}

function resolveVariantAnimationProps(variantProps: any, styledObject: any) {
  let resolvedVariant = {};
  Object.keys(variantProps).forEach((variant) => {
    const variantValue = variantProps[variant];
    const variantObject = styledObject?.variants?.[variant]?.[variantValue];

    resolvedVariant = deepMerge(resolvedVariant, variantObject);
  });

  return resolvedVariant;
}

const AnimatePresence = React.forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const ctx = useStyled();
    const clonedChildren: any = [];
    const CONFIG = useMemo(
      () => ({
        ...ctx.config,
        propertyTokenMap,
      }),
      [ctx.config]
    );

    React.Children.toArray(children).forEach((child: any) => {
      if (child?.type?.displayName === 'StyledComponent') {
        let tokenizedAnimatedProps: any = {};
        const animationAliases = {};

        const componentStyledObject = child?.type?.styled?.config;
        const { variantProps, restProps } = getVariantProps(
          child?.props,
          componentStyledObject
        );

        const config = CONFIG;

        if (child.type.styled.resolvedProps) {
          tokenizedAnimatedProps = child?.type?.styled?.resolvedProps;
        } else {
          const variantStyledObject = resolveVariantAnimationProps(
            variantProps,
            componentStyledObject
          );
          const componentStyledObjectWithVariants = deepMergeObjects(
            componentStyledObject,
            variantStyledObject
          );
          tokenizedAnimatedProps = tokenizeAnimationPropsFromConfig(
            componentStyledObjectWithVariants,
            config,
            animationAliases
          );

          child.type.styled.resolvedProps = tokenizedAnimatedProps;
        }

        const tokenizedSxAnimationProps: any = tokenizeAnimationPropsFromConfig(
          child?.props?.sx,
          config,
          animationAliases
        );

        const mergedAnimatedProps = deepMergeObjects(
          {},
          tokenizedSxAnimationProps,
          tokenizedAnimatedProps
        );

        const clonedChild = React.cloneElement(child, {
          exit: mergedAnimatedProps?.[':exit'],
          ...restProps,
        });
        clonedChildren.push(clonedChild);
      } else {
        clonedChildren.push(child);
      }
    });
    return (
      <MotionAnimatePresence ref={ref} {...props}>
        {clonedChildren}
      </MotionAnimatePresence>
    );
  }
);
export class MotionAnimationDriver implements IAnimationDriverPlugin {
  name: 'MotionAnimationDriver';
  engine = { ...Motion, AnimatePresence };
  config = {
    aliases: {
      ':animate': 'animate',
      ':initial': 'initial',
      ':exit': 'exit',
      ':initialProps': 'initialProps',
      ':animateProps': 'animateProps',
      ':transition': 'transition',
      ':transformOrigin': 'transformOrigin',
      ':whileTap': 'whileTap',
      ':whileHover': 'whileHover',
      ':onAnimationComplete': 'onAnimationComplete',
    } as const,
  };

  register(config: any) {
    if (this.config) {
      this.config.aliases = {
        ...this.config?.aliases,
        ...config?.aliases,
      };

      // @ts-ignore
      this.config.tokens = {
        // @ts-ignore
        ...this.config?.tokens,
        ...config?.tokens,
      };

      // @ts-ignore
      this.config.ref = config?.ref;
    }
  }

  constructor(config?: IAnimationResolver) {
    this.register(config);
    this.name = 'MotionAnimationDriver';
    this.engine.AnimatePresence.defaultProps = {
      ...this.engine.AnimatePresence.defaultProps,
      config,
    };
  }
}
