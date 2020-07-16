import { render } from "@testing-library/react"
import React from "react"
import AnimatedSocialIcon from "./animatedSocialIcon"

describe("AnimatedSocialIcon", () => {
  it("renders without crashing", () => {
    const { container } = render(<AnimatedSocialIcon brandName="github" />)
    expect(container.firstChild).toBeInTheDocument()
  })
  it("renders with default values", () => {
    const { container } = render(<AnimatedSocialIcon brandName="github" />)
    const component = container.firstChild
    expect(component).toHaveAttribute("width", "inherit")
    expect(component).toHaveAttribute("target", "_blank")
  })
})
