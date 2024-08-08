const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/profile_vue/" : "/",
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Резюме Александр Банных";
        return args;
      });
  }
});
