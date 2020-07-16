import { matchers } from "jest-emotion"
import { toBeInTheDocument, toHaveAttribute } from "@testing-library/jest-dom/matchers"
expect.extend({ matchers, toBeInTheDocument, toHaveAttribute })
