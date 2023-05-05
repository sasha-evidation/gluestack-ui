import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { G, Path } from 'react-native-svg';

export const WarningIcon = createIcon({
  Root,
  viewBox: '0 0 20 19',
  d: 'M8.02967 1.65893C8.88589 0.111104 11.1111 0.111084 11.9673 1.65888L19.7131 15.6603C20.5427 17.16 19.4581 18.9995 17.7443 18.9995H2.25323C0.53945 18.9995 -0.545175 17.16 0.284384 15.6604L8.02967 1.65893ZM10.9973 15.0009C10.9973 14.4494 10.5502 14.0022 9.99866 14.0022C9.44712 14.0022 9 14.4494 9 15.0009C9 15.5524 9.44712 15.9996 9.99866 15.9996C10.5502 15.9996 10.9973 15.5524 10.9973 15.0009ZM10.7381 7.14764C10.6882 6.7816 10.3742 6.4997 9.99446 6.5C9.58025 6.50033 9.24473 6.83639 9.24506 7.2506L9.24866 11.7522L9.25559 11.854C9.30555 12.22 9.61957 12.5019 9.99926 12.5016C10.4135 12.5013 10.749 12.1652 10.7487 11.751L10.7451 7.2494L10.7381 7.14764Z',
  // d: 'M11.9836 0.00267822C8.77744 0.0551662 5.72075 1.36728 3.47427 3.65538C2.35024 4.77447 1.46338 6.10869 0.866705 7.57831C0.270027 9.04793 -0.0242179 10.6228 0.00155827 12.2087C-0.000286057 13.7583 0.303697 15.2931 0.896087 16.7251C1.48848 18.1571 2.35763 19.458 3.45373 20.5535C4.54983 21.6489 5.85133 22.5173 7.28365 23.1089C8.71596 23.7004 10.2509 24.0035 11.8006 24.0007H12.0146C15.2217 23.9677 18.2847 22.6638 20.5316 20.3751C22.7785 18.0864 24.0257 14.9999 23.9996 11.7927C24.0033 10.2243 23.6933 8.6709 23.0879 7.22398C22.4825 5.77706 21.5939 4.4658 20.4744 3.36731C19.3548 2.26882 18.0269 1.40527 16.5688 0.827453C15.1106 0.249636 13.5517 -0.0307856 11.9836 0.00267822ZM10.5007 16.5433C10.4935 16.3473 10.5254 16.1517 10.5947 15.9682C10.6639 15.7846 10.7691 15.6167 10.904 15.4742C11.0389 15.3318 11.2009 15.2177 11.3804 15.1386C11.5599 15.0594 11.7534 15.0169 11.9496 15.0135H11.9766C12.3712 15.0142 12.7501 15.1677 13.034 15.4417C13.3179 15.7157 13.4847 16.089 13.4995 16.4833C13.5068 16.6794 13.4749 16.875 13.4057 17.0586C13.3365 17.2423 13.2314 17.4102 13.0965 17.5527C12.9615 17.6952 12.7995 17.8093 12.6199 17.8884C12.4403 17.9674 12.2468 18.0099 12.0506 18.0132H12.0236C11.6291 18.0119 11.2505 17.8583 10.9667 17.5844C10.6829 17.3105 10.5159 16.9375 10.5007 16.5433ZM11.0007 12.5017V6.50215C11.0007 6.23695 11.106 5.98262 11.2935 5.7951C11.481 5.60758 11.7354 5.50223 12.0006 5.50223C12.2658 5.50223 12.5201 5.60758 12.7076 5.7951C12.8951 5.98262 13.0005 6.23695 13.0005 6.50215V12.5017C13.0005 12.7669 12.8951 13.0212 12.7076 13.2087C12.5201 13.3962 12.2658 13.5016 12.0006 13.5016C11.7354 13.5016 11.481 13.3962 11.2935 13.2087C11.106 13.0212 11.0007 12.7669 11.0007 12.5017Z',
});

export const WarningTwoIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path
        d="M13.9193 18.4271C13.8992 17.9392 13.6816 17.4813 13.3178 17.1478C12.9545 16.8148 12.4731 16.631 11.975 16.6304H11.9746H11.945V16.6304L11.9392 16.6305C11.6898 16.6348 11.4434 16.6864 11.2142 16.7827L11.333 17.0655L11.2142 16.7827C10.9851 16.879 10.7773 17.0183 10.6035 17.1931C10.4296 17.368 10.2932 17.5751 10.2031 17.8026C10.113 18.0302 10.0712 18.2732 10.0806 18.5171L10.0807 18.5176C10.1001 19.0055 10.3169 19.4638 10.6802 19.7979C11.043 20.1315 11.5241 20.3162 12.0222 20.3177H12.0233H12.0529V20.3178L12.058 20.3177C12.3081 20.3138 12.5552 20.2624 12.785 20.1661C13.0148 20.0698 13.2232 19.9303 13.3974 19.7549C13.5716 19.5795 13.7081 19.3718 13.7981 19.1436C13.8881 18.9153 13.9295 18.6716 13.9193 18.4271ZM13.9193 18.4271L13.5863 18.4408M13.9193 18.4271C13.9193 18.4271 13.9193 18.4271 13.9193 18.427L13.5863 18.4408M13.5863 18.4408C13.5945 18.6386 13.5611 18.836 13.488 19.0213C13.415 19.2066 13.3037 19.3762 13.1609 19.52C13.018 19.6638 12.8464 19.779 12.6561 19.8587C12.4658 19.9385 12.2607 19.9812 12.0529 19.9844H12.0233C11.6062 19.9831 11.2058 19.8284 10.9059 19.5525C10.6059 19.2767 10.4296 18.9011 10.4137 18.5043C10.4061 18.3069 10.4399 18.1101 10.513 17.9254C10.5862 17.7406 10.6973 17.5715 10.8399 17.4281C10.9824 17.2847 11.1536 17.1698 11.3434 17.09C11.5331 17.0103 11.7376 16.9674 11.945 16.9638H11.9746C12.3916 16.9642 12.7922 17.1182 13.0926 17.3936C13.393 17.6689 13.5699 18.0442 13.5863 18.4408ZM23.4665 20.2125L23.4665 20.2125C23.6068 20.4676 23.6751 20.7517 23.6658 21.0376C23.6566 21.3234 23.57 21.6033 23.4131 21.8501C23.2562 22.097 23.0337 22.3031 22.7658 22.4469C22.4978 22.5907 22.1942 22.6667 21.8847 22.6667H21.8846H2.11538H2.11533C1.80576 22.6667 1.50222 22.5907 1.23422 22.4469C0.96631 22.3031 0.743845 22.097 0.586879 21.8501L0.305565 22.0289L0.586879 21.8501C0.429998 21.6033 0.343434 21.3234 0.334166 21.0376C0.324898 20.7517 0.393165 20.4676 0.533517 20.2125L0.53353 20.2125L10.4192 2.23977C10.5681 1.96911 10.7933 1.74021 11.0721 1.5796C11.3511 1.41893 11.6722 1.33333 12.0005 1.33333C12.3289 1.33333 12.65 1.41893 12.9289 1.5796C13.2078 1.74021 13.4329 1.96911 13.5819 2.23977L23.4665 20.2125ZM11.0224 7.44182C10.7599 7.69176 10.6091 8.03434 10.6091 8.39521V14.4365C10.6091 14.7974 10.7599 15.1399 11.0224 15.3899C11.2843 15.6393 11.6363 15.7767 12 15.7767C12.3637 15.7767 12.7157 15.6393 12.9776 15.3899C13.2401 15.1399 13.3909 14.7974 13.3909 14.4365V8.39521C13.3909 8.03434 13.2401 7.69176 12.9776 7.44182C12.7157 7.19242 12.3637 7.05499 12 7.05499C11.6363 7.05499 11.2843 7.19242 11.0224 7.44182Z"
        stroke="currentColor"
        strokeWidth="0.666667"
      />
    </G>
  ),
});
