import { AnimationTypes } from "../animations"
import { IconTypes } from "../icons"
/**
 * Icon properties.
 */
export interface AnimatedSocialIconProps {
  /** Icon name */
  brandName: IconTypes
  /** url link for redirection */
  url?: string
  /** When `true`, opens link in a new window*/
  newPage?: boolean
  /** size of icon. By default, inherits the parent font-size */
  width?: string
  /** animations */
  animation?: AnimationTypes
  /** base color */
  defaultColor?: string
  /** color on hover */
  hoverColor?: string
  /** custom style for icon */
  style?: React.CSSProperties
  /** animation duration (in seconds)*/
  animationDuration?: number
}
