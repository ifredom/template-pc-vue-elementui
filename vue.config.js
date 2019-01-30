const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8085,
    https: false,
    open: false, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  pwa: {
    name: 'ifredom PWA App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    }
  },
  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],
  // 生产环境 sourceMap
  productionSourceMap: false,
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@com', resolve('src/components'))
  },
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: (config) => {

  },
}