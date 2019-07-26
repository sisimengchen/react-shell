const env = process.env.NODE_ENV || 'development';
const devMode = env === 'development';

module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      require('@babel/preset-env').default,
      {
        debug: devMode,
        targets: { browsers: ['Android >= 4.0', 'ios >= 8', 'ie >=9'] },
        modules: false,
        useBuiltIns: 'usage',
        corejs: {
          version: 3
        }
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
    [require('@babel/plugin-transform-runtime').default, { corejs: 3 }],
    [require('@babel/plugin-proposal-decorators').default, { legacy: true }],
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-syntax-dynamic-import').default
  ].filter(Boolean);

  return {
    sourceType: 'unambiguous',
    presets,
    plugins
  };
};
