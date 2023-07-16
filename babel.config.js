module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '~': './src',
          },
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        },
      ],
    ],
  }
}
