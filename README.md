## fis-iconfont

---


## 背景与简介

移动端iconfont的使用越来越广泛，由于缺少比较好的自动化工具，开发者在修改字体图标时需要在2个平台[icomoon](https://icomoon.io/app/)和[everythingfonts](https://everythingfonts.com/)进行转换，免费服务各种限制，而且还要手工进行额外的操作。

本插件基于[grunt-webfont](https://github.com/sapegin/grunt-webfont)改造成fis插件，实现一键转换svg图标为svg,oet,ttf,woff,woff2的功能。

由于开源模块大量使用了异步调用，所以暂未改造成fis release 插件，先用command命令来实现自动化需求。

## 开始使用

### 安装插件

执行 `npm install -g fis-iconfont` 全局安装

### 配置说明

```javascript
var settings = {
    src:'./src/resource/svgs',
    dest:'./src/resource/fonts',
    fontname:'wiifont'
}
```
> src 为svg文件的距离感
> dest 为生成字体以后的文件夹
> fontname 为字体的名称

### 生成字体

在fis模块根目录执行`fis iconfont`即可完成字体转换工作，字体将生成更新到dest目录里(原有同名字体将删除)。





