import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import {terser} from 'rollup-plugin-terser'

import packageJSON from "./package.json"
const input = "./src/index.ts"
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js")

export default [
  // CommonJS
  {
    input,
    output: [
      {
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJSON.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
      {
          file: packageJSON.browser,
          format: "umd",
          name: "socialMediaIconsLibrary",
          globals: {
              react: "React",
              "@emotion/styled": "styled",
              "@emotion/core": "core"
          },
          sourcemap: true,
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      commonjs(),
      external(),
      resolve(),
      typescript({
        typescript: require("typescript"),
      }),
    ],
  },
  {
    input,
    output: [
      {
        file: minifyExtension(packageJSON.main),
        format: "cjs",
        sourcemap: true,
      },
      {
        file: minifyExtension(packageJSON.module),
        format: "es",
        exports: "named",
        sourcemap: true
      },
      {
        file: minifyExtension(packageJSON.browser),
        format: "umd",
        name: "socialMediaIconsLibrary",
        globals: {
            react: "React",
            "@emotion/styled": "styled",
            "@emotion/core": "core"
        },
        sourcemap: true
    }
    ],
    plugins: [
        babel({
            exclude: "node_modules/**",
          }),
          commonjs(),
          external(),
          resolve(),
          typescript({
            typescript: require("typescript"),
          }),
          terser()
    ]
  },
]
