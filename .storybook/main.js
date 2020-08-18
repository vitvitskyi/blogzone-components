module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
    ]
}


// const path = require('path');
//
// module.exports = {
//     stories: ['../stories/**/*.stories.(ts|tsx)'],
//     addons: [
//         '@storybook/addon-actions',
//         '@storybook/addon-links',
//         '@storybook/addon-docs',
//         '@storybook/addon-knobs',
//         '@storybook/addon-knobs/register',
//         '@storybook/addon-viewport/register',
//     ],
//     webpackFinal: async config => {
//         config.module.rules.push({
//             test: /\.(ts|tsx)$/,
//             use: [
//                 {
//                     loader: require.resolve('ts-loader'),
//                     options: {
//                         transpileOnly: true,
//                     },
//                 },
//                 {
//                     loader: require.resolve('react-docgen-typescript-loader'),
//                 },
//             ],
//         });
//
//         config.resolve.extensions.push('.ts', '.tsx');
//
//         return config;
//     },
// };
//
