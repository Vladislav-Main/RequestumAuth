declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      // main?: string;
      // grey: string;
    }
  >;
  export default content;
}
