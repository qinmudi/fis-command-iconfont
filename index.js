

'use strict';

exports.name = 'iconfont';
exports.usage = '[options]';
exports.desc = 'fis iconfont generator,support svg,eot,ttf,woff,woff2';

var path = require('path');
var fs  = require('fs');
var exists = fs.existsSync;
var iconfont = require("./lib/iconfont");

exports.register = function(commander) {

    commander
        .option('-n,--fontname <fontname>', 'set fontname ,default `iconfont`')
        .option('-s,--src  <srcdir>', 'set svg icon dir')
        .option('-d,--dest <destdir>', 'set font dir')
        .option('-r,--root <path>', 'set project root')
        .action(function() {
            var args = [].slice.call(arguments);
            var options = args.pop();
            var root = path.join(process.cwd(), options.root || "" );
            var filepath =  path.resolve(root, 'fis-conf.js');
            
            if(exists(filepath)){
                require(filepath);
            }
            //读取配置，命令行参数优先
            var settings = fis.config.get("iconfont") || {};
            ['src','dest','fontname'].forEach(function(i){
                settings[i] = options[i] || settings[i];
                if(i == 'src' || i == 'dest'){
                    settings[i] = path.join(root,settings[i]);
                }
            })


            if(!settings['src'] || !settings['dest'] ){
                fis.log.error("please set iconfont settings in fis-conf.js");
            }

            //导出字体
            iconfont.generateFonts(settings);
           
        });
};

// test code
// var settings = {
//     src:'./src/resource/svgs',
//     dest:'./src/resource/fonts',
//     fontname:'wiifont'
// }
// iconfont.generateFonts(settings);



