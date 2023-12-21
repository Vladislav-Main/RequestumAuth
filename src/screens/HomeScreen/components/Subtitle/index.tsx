import React from 'react';
import {StyledSubTitleView, StyledSubTitle} from './styles';
import {SubTitleProps} from './types';

const Subtitle = ({name}: SubTitleProps) => {
  return (
    <StyledSubTitleView>
      <StyledSubTitle>{name}</StyledSubTitle>
    </StyledSubTitleView>
  );
};

export default Subtitle;
