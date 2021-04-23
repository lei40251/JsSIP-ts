import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { name } from './package.json';

export default {
  input  : 'lib/index.js',
  output : [
    {
      file   : `dist/${name}.esm.js`,
      format : 'es'
    },
    {
      file   : `dist/${name}.umd.js`,
      format : 'umd',
      name   : 'rollup'
    }
  ],
  plugins : [
    commonjs(),
    eslint({
      throwOnError   : true,
      throwOnWarning : true,
      include        : [ 'src/**' ],
      exclude        : [ 'node_modules/**' ]
    }),
    json(),
    babel({
      extensions   : [ '.js' ],
      exclude      : 'node_modules/**',
      babelHelpers : 'bundled' }),
    terser(),
    nodeResolve()
  ]
};
