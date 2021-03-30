import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SText = styled.span`
  ${props => props.isBold && 'font-weight: 600;'}
  ${props => props.isCursor && 'cursor: pointer;'}
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Text = ({ children, isBold, onClick, isCursor }) => (<SText isBold={isBold} onClick={onClick} isCursor={isCursor}>{children}</SText>)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  isBold: PropTypes.bool,
  onClick: PropTypes.func,
  isCursor: PropTypes.bool
}

Text.defaultProps = {
  isBold: false,
  onClick: null,
  isCursor: false
}

export default Text
