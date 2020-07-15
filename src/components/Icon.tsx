import * as React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconName } from "@fortawesome/fontawesome-common-types"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { animations, AnimationTypes } from "../animations"

library.add(fab)

/**
 * Icon properties.
 */
interface IconProps {
  /** brand icon to display. List of icons: https://fortawesome.com/sets/font-awesome-5-brands */
  brandName: IconName
  /** link */
  linkTo?: string
  /** open link in a new page. Default = "_self"*/
  target?: "_blank" | "_self" | "_parent" | "_top"
  /** width of icon. Default = inherit */
  width?: string
  /** animations */
  animation?: AnimationTypes
  /** default = "black" */
  startColor?: string
  /** default = "black" */
  endColor?: string
}

interface IconWrapperProps {
  size: string
  animation: string
  startColor: string
  endColor: string
}

const IconWrapper = styled.a<IconWrapperProps>`
  cursor: pointer;
  svg {
    font-size: ${props => props.size};
    color: ${props => props.startColor};
    :hover {
      animation: ${props => props.animation} 0.5s forwards 0s ease;
      color: ${props => props.endColor};
    }
  }

  ${props => animations[props.animation]}
`

/**
 * Form Icon.
 */
export const Icon: React.FunctionComponent<IconProps> = ({
  brandName,
  linkTo,
  target = "_self",
  width = "inherit",
  animation = "moveUp",
  startColor = "#D1D1D1",
  endColor = "red",
}: IconProps) => {
  return (
    <IconWrapper
      href={linkTo}
      target={target}
      size={width}
      animation={animation}
      startColor={startColor}
      endColor={endColor}
    >
      <FontAwesomeIcon icon={["fab", brandName]} />
    </IconWrapper>
  )
}

export default Icon
