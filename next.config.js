module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jpg$/,
      use: ["file-loader"],
    })

    return config
  },
}
