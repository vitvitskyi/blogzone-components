const image = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      image({ include: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    config.output = {
      ...config.output,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-hook-form': 'ReactHookForm',
        'react-copy-to-clipboard': 'CopyToClipboard',
        'styled-components': 'styled',
      },
    };

    return config;
  },
};
