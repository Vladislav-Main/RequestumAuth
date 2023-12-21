import React from 'react';
import {StyledTitleView, StyledTitle} from './styles';
import {TitleProps} from './types';

const Title = ({name}: TitleProps) => {
  return (
    <StyledTitleView>
      <StyledTitle>{name.toUpperCase()}</StyledTitle>
    </StyledTitleView>
  );
};

export default Title;
