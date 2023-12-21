import React from 'react';
import {StyledHeaderContainer, StyledHeaderText} from './styles';
import {HeaderTitleProps} from './types';

const HeaderTitle = ({text}: HeaderTitleProps) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderText>{text}</StyledHeaderText>
    </StyledHeaderContainer>
  );
};

export default HeaderTitle;
