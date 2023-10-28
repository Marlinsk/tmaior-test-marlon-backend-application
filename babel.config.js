module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@common': './src/common',
        '@core': './src/core',
        '@infrastructure': './src/infrastructure',
      }
    }]
  ],
}