import { defineConfig } from 'rollup';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'src/Core/Core.js',
  plugins: [
    alias({
      entries: [
        { find: '@Tool', replacement: 'src/Tools/_framework/Tool' },
        { find: '@Toast', replacement: 'src/Tools/_framework/Toast' },
        { find: 'solid-svg', replacement: '@fortawesome/free-solid-svg-icons' },
        { find: '@context', replacement: 'src/Tools/test/prosemirror-react/context' },
        { find: '@core', replacement: 'src/Tools/test/prosemirror-react/core' },
        { find: '@extensions', replacement: 'src/Tools/test/prosemirror-react/extensions' },
        { find: '@react', replacement: 'src/Tools/test/prosemirror-react/react' },
      ],
    }),
    nodeResolve({
      preferBuiltins: true,
      browser: true,
    }),
    commonjs({ transformMixedEsModules: true }),
    nodePolyfills(),
    terser(),
  ],
  output: {
    file: 'src/Viewer/core.js',
    format: 'iife',
    name: 'Core',
  },
});
