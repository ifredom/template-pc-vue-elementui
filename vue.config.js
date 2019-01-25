module.exports = {
  lintOnSave: false,
  devServer: {
    port:8085,
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer',
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
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
  }
}