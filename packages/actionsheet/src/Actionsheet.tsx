import React, { forwardRef } from 'react';
import { Platform, Pressable } from 'react-native';
import { useControllableState } from '../../hooks/src';
import { Overlay } from '@gluestack-ui/overlay';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
import type { IActionsheetProps } from './types';

export function Actionsheet<T>(StyledActionsheet: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        onOpen,
        defaultIsOpen = false,
        trapFocus = true,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        useRNModal,
        initialFocusRef,
        finalFocusRef,
        unmountOnExit = true,
        snapPoints = [50],
        // @ts-ignore
        _experimentalOverlay = true,
        ...props
      }: T & IActionsheetProps,
      ref?: any
    ) => {
      const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
          if (val === false) {
            onClose && onClose();
          } else {
            onOpen && onOpen();
          }
        },
      });
      const [backdropVisible, setBackdropVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
      });

      const handleClose = React.useCallback(() => {
        setVisible(false);
      }, [setVisible]);

      const handleCloseBackdrop = React.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          backdropVisible: backdropVisible,
          handleCloseBackdrop,
          trapFocus,
          initialFocusRef,
          finalFocusRef,
          snapPoints,
          isOpen,
        };
      }, [
        handleClose,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints,
        isOpen,
      ]);

      if (!_experimentalOverlay) {
        return (
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              {children}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        );
      }

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          useRNModal={useRNModal}
          // @ts-ignore
          style={overlayStyle}
          // unmountOnExit={unmountOnExit}
        >
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              <Pressable
                onPress={() => {
                  handleClose();
                }}
              >
                hello
              </Pressable>
              {children}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        </Overlay>
      );
    }
  );
}
