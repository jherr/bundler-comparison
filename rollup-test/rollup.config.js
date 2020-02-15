import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "cjs"
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    (NODE_ENV !== 'production' && serve({ contentBase: '' })),
    (NODE_ENV !== 'production' && livereload())
  ]
}