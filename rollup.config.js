import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss-modules";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
      writeDefinitions: true
    }),
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true
    }),
    commonjs(),
    babel({
      presets: ["@babel/preset-react"]
    })
  ]
};
