import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button({ children, ...restProps }) {
  return (
    <Wrapper>
      <StyledButton {...restProps}>{children}</StyledButton>
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
