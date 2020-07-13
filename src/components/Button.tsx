
import * as React from "react";
import styled from "@emotion/styled";

/**
 * Grid properties.
 */
interface ButtonProps {
  /** prop1 description */
  text: string
  onClick?: () => void
}

const Wrapper = styled.button`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 4px;
  background: #5cdb95;
  color: #05385b;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`;


/**
 * Form Grid.
 */
export const Button:React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {text, onClick} = props
  return <Wrapper onClick={onClick}>{text}</Wrapper>
}

export default Button