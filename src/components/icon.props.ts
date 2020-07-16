import { IconName } from "@fortawesome/fontawesome-common-types"
import { AnimationTypes } from "../animations"

/**
 * Icon properties.
 */
export interface AnimatedSocialIconProps {
    /** List of icons: https://fortawesome.com/sets/font-awesome-5-brands */
    brandName: IconName
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