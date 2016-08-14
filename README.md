## fis-iconfont

---


## 背景与简介

移动端iconfont的使用越来越广泛，由于缺少比较好的自动化工具，开发者在修改字体图标时需要在2个平台[icomoon](https://icomoon.io/app/)和[everythingfonts](https://everythingfonts.com/)进行转换，免费服务各种限制，而且还要手工进行额外的操作。

本插件实现一键转换svg图标为svg,oet,ttf,woff,woff2的功能。

由于开源模块大量使用了异步调用，所以暂未改造成fis release 插件，先用command命令来实现自动化需求。

## 开始使用

### 安装插件

执行 `npm install -g fis-iconfont` 全局安装

### 配置说明

```javascript
var settings = {
    src:'./src/resource/svgs',
    dest:'./dist/resource/fonts',
    fontname:'wiifont',
    destCss:'./dist',
    destHtml: './dist'
}
```
> src 为svg文件夹  
> dest 为生成字体以后的文件夹  
> fontname 为字体的名称  
> destCss 为 css 生成的路径
> destHtml 为 html 生成的路径

### 生成字体

在fis模块根目录执行`fis iconfont`即可完成字体转换工作，字体将生成更新到指定dest目录里(原有同名字体将删除)。
本插件里附带可以测试的 svg 文件在src中可以找到。

> 命令行方式调用  
```
fis3 iconfont -n wiifont -s ./src/resource/svgs -d ./dist/resource/fonts -c ./dist -m ./dist
```

> fis集成方式
```javascript
fis.config.set("iconfont", {
    'src': '/src/resource/svgs', //图标目录
    'dest': '/dist/resource/fonts', //产出字体目录
    'fontname': 'wiifont', //产出字体名称
    'order': 'name', //name或者time //图标按名称还是按修改时间排序，默认按名称排序
    'destCss': './dist',
    'destHtml': './dist'
});
```

### 使用demo
[fis3-iconfont-demo](https://github.com/qinmudi/fis-command-iconfont-demo)

### 如果出现 html或css 乱码问题
请查看你本机的"lodash": "^2.4.2"版本是否为该版本。

