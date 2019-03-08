const env = process.env.NODE_ENV || 'development';
const devMode = env === 'development';

module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      require('@babel/preset-env'),
      {
        useBuiltIns: "usage",
        targets: { browsers: ['Android >= 4.0', 'ios >= 8', 'ie >=9'] }
      }
    ],
    [require('@babel/preset-react')]
  ];
  const plugins = [
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-syntax-dynamic-import')
  ];

  return {
    presets,
    plugins
  };
};
