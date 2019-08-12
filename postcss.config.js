module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      browsers: ['Android >= 4.0', 'ios >= 8', 'ie >=9']
    })
  ]
};
