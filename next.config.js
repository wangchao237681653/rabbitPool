module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/index': { page: '/index' },
      '/hosting': { page: '/hosting' },
      '/unfind': { page: '/unfind' }
    }
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jpg$/,
      use: ["file-loader"],
    })
    return config
  },
}
