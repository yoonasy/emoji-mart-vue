// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve(src) {
  return path.join(__dirname, src)
}

module.exports = {
  publicPath: '/',
  outputDir: '../docs',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: path.join(__dirname, '..', 'docs'),
  },
  chainWebpack: (webpackConfig) => {
    // 引用上层会自动导入一次vue 因为配备了别名进行导入 所以这里导入的别名指向上一层的vue
    // webpackConfig.resolve.alias.set('vue', resolve('../node_modules/vue'))
    webpackConfig.resolve.alias.set('vue$', resolve('../node_modules/vue'))
    //
    // webpackConfig.externals([
    //   {
    //     vue: {
    //       root: 'vue',
    //       commonjs2: 'vue',
    //       commonjs: 'vue',
    //       amd: 'vue',
    //     },
    //   },
    //   /^.*data\/.*\.json$/,
    // ])
  },
}
