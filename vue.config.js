const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭eslint
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': "@/assets",
                'common': "@/common",
                'components': "@/components",
                'api': "@/api",
                'views': "@/views",
            }
        }
    },
    publicPath: '/',
    devServer: {
        path: 8003,
        proxy: {
            '/api': {
                target: "http://xxx.xx.xx.xx:8080/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
})
