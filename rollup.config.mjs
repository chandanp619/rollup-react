import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import dotenv from "rollup-plugin-dotenv";



export default {

    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',

    },

    plugins: [
        dotenv(),
        serve({
            // open:true,
            contentBase: 'public',
            historyApiFallback: true,
            host: 'localhost',
            port:3001 
        }),
        nodeResolve({
           extensions: ['.js', '.jsx']
        }),
        babel({
           babelHelpers: 'bundled',
           presets: ['@babel/preset-react'],
           extensions: ['.js', '.jsx']
        }),
        commonjs(),
        replace({
           preventAssignment: false,
           'process.env.NODE_ENV': '"development"'
        })
     ]

}