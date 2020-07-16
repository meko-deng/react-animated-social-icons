import * as React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { animations } from "../animations"
import { IconProps } from "./icon.props"

library.add(fab)

interface IconWrapperProps extends Partial<IconProps> {}

const IconWrapper = styled.a<IconWrapperProps>`
  cursor: pointer;
  svg {
    font-size: ${props => props.width};
    color: ${props => props.defaultColor};
    :hover {
      animation: ${props => props.animation} 0.5s forwards ease;
      color: ${props => props.hoverColor};
    }
  }

  ${props => animations[props.animation]}
`

/**
 * Form Icon.
 */
export const Icon: React.FunctionComponent<IconProps> = ({
  brandName,
  url,
  newPage = true,
  width = "inherit",
  animation,
  defaultColor,
  hoverColor,
}: IconProps) => {
  return (
    <IconWrapper
      href={url}
      target={newPage ? "_blank" : "_self"}
      width={width}
      animation={animation}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
    >
      <FontAwesomeIcon icon={["fab", brandName]} />
    </IconWrapper>
  )
}

export default Icon
