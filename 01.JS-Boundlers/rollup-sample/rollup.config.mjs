import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main.js',
    output: [{
        format: 'cjs',
        file: 'dist/bundle.js'
    },
    {
        format: 'cjs',
        file: 'dist/bundle.min.js',
        plugins: [terser()]
    }],
    plugins: [json()]
}

// module.exports  da kullanilabilir
//rollup.config.js