module.exports = {
    publicPath: '',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '大兴安岭职业学院邮箱系统'
                return args
            })
    },
}
