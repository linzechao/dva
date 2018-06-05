module.exports = {
  // 预加载 ant mobile
  extraBabelPlugins: [
    ['import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es',
      style: true
    }]
  ],

  env: {
    // 开发环境
    development: {
      // 模块热替换
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  },

  // 代理
  proxy: {
    '/api': {
      target: 'http://your-api-server',
      changeOrigin: true
    }
  },

  // 这里的别名无效
  alias: {
    _: './src/router/',
    $: './src/utils/',
    @: './src/components/'
  },

  // 使用 sass
  sass: {}
}
