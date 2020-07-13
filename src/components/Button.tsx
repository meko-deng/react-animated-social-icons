
import * as React from "react";

/**
 * Grid properties.
 */
interface ButtonProps {
  /** prop1 description */
  text: string
}

/**
 * Form Grid.
 */
export const Button:React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {text} = props
  return <button>{text}</button>
}

export default Button