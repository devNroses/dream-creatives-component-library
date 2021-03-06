"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSConfig = void 0;
exports.TSConfig = {
    compilerOptions: {
        target: 'esnext',
        module: 'esnext',
        strict: true,
        jsx: 'preserve',
        importHelpers: true,
        moduleResolution: 'node',
        experimentalDecorators: true,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        allowJs: true,
        sourceMap: true,
        baseUrl: '.',
        types: ['webpack-env'],
        paths: {
            '@/*': ['src/*'],
            '~/*': ['./*']
        },
        lib: ['esnext', 'dom', 'dom.iterable', 'scripthost']
    },
    exclude: ['node_modules', '.bit']
};
