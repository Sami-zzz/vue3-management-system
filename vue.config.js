const { defineConfig } = require('@vue/cli-service')

//自动导入element-plus配置
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        component: '@/component'
      }
    },
    plugins: [
      //自动导入element-plus配置
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
