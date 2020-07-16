import { IconName } from "@fortawesome/fontawesome-common-types"
import { AnimationTypes } from "../animations"

/**
 * Icon properties.
 */
export interface IconProps {
    /** brand icon to display. List of icons: https://fortawesome.com/sets/font-awesome-5-brands */
    brandName: IconName
    /** link */
    url?: string
    /** open link in a new page. Default = "_self"*/
    newPage?: boolean
    /** width of icon. Default = inherit */
    width?: string
    /** animations */
    animation?: AnimationTypes
    /** default = "black" */
    defaultColor?: string
    /** default = "black" */
    hoverColor?: string
  }