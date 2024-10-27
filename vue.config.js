const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cisc322-project-blog/'
    : '/'
}

module.exports = {
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
  },
};
