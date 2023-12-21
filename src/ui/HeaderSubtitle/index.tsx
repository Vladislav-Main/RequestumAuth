import React from 'react';
import {StyledHeaderContainer, StyledHeaderText} from './styles';
import {HeaderSubtitleProps} from './types';

const HeaderSubtitle = ({text}: HeaderSubtitleProps) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderText>{text}</StyledHeaderText>
    </StyledHeaderContainer>
  );
};

export default HeaderSubtitle;
