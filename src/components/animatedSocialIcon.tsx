import * as React from "react"
import styled from "@emotion/styled"
import { animations } from "../animations"
import { AnimatedSocialIconProps } from "./animatedSocialIcon.props"
import { icons } from "../icons"

interface AnimatedSocialIconWrapperProps extends Partial<AnimatedSocialIconProps> {}

const AnimatedSocialIconWrapper = styled.a<AnimatedSocialIconWrapperProps>`
  width: ${(props) => props.width};
  cursor: pointer;
  svg {
    // font-size: ${(props) => props.width};
    color: ${(props) => props.defaultColor};
    :hover {
      animation: ${(props) => props.animation} ${(props) => `${props.animationDuration}s`} forwards
        ease;
      color: ${(props) => props.hoverColor};
    }
  }

  ${(props) => animations[props.animation]}
`

/**
 * A minimalistic animation library for social icons from font-awesome 5.
 * Use this library to redirect users to your social webpages!
 */
export const AnimatedSocialIcon: React.FunctionComponent<AnimatedSocialIconProps> = ({
  brandName,
  url,
  newPage = true,
  width = "1em",
  animation,
  defaultColor,
  hoverColor,
  animationDuration = 0.5,
  ...rest
}: AnimatedSocialIconProps) => {
  return (
    <AnimatedSocialIconWrapper
      href={url}
      target={newPage ? "_blank" : "_self"}
      width={width}
      animation={animation}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      animationDuration={animationDuration}
      {...rest}>
      {icons[`${brandName}`]}
    </AnimatedSocialIconWrapper>
  )
}

export default AnimatedSocialIcon
