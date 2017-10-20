const cssnanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }]
};

module.exports = ({ file, options }) => {
  return {
    parser: 'postcss-safe-parser',
    plugins: {
      // 'cssnano': cssnanoConfig,
      'autoprefixer': true
    },
  };
};
