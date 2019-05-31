const env = process.env.NODE_ENV || 'development';
const devMode = env === 'development';

module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      require('@babel/preset-env'),
      {
        debug: devMode,
        targets: { browsers: ['Android >= 4.0', 'ios >= 8', 'ie >=9'] }
      }
    ],
    [
      require('@babel/preset-react'),
      {
        development: devMode
      }
    ]
  ];
  const plugins = [
    [require('@babel/plugin-transform-runtime'), { corejs: 3 }],
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-syntax-dynamic-import')
  ].filter(Boolean);

  return {
    presets,
    plugins
  };
};
