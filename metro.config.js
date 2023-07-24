const { getDefaultConfig } = require('expo/metro-config')

module.exports = (async () => {
  // eslint-disable-next-line no-undef
  const defaultConfig = await getDefaultConfig(__dirname)
  defaultConfig.resolver.resolverMainFields.unshift('sbmodern')
  return defaultConfig
})()
