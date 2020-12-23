// This configuration file is not used anywhere in the code, it's a hack to handle InteliJ relative path imports
// Keep in sync with actual webpack aliases

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 8082,
    public: '0.0.0.0:4000'
  }
}
