module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=8)}([function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t,o){"use strict";(function(e){var r;o(3),o(10),o(11),o(12);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const n=e=>{0},a={compile:n};var l,i;t.a=a,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(n,"compile","/home/stt92/Documents/simpleMERNSetup/server/devBundle.js"),l.register(a,"default","/home/stt92/Documents/simpleMERNSetup/server/devBundle.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(0)(e))},function(e,t,o){"use strict";(function(e){var o;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=()=>'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>MERN Kickstart</title>\n    </head>\n    <body>\n        <div id="root"></div>\n        <script type="text/javascript" src="/dist/bundle.js"><\/script>\n    </body>\n    </html>';var n,a;t.a=r,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(r,"default","/home/stt92/Documents/simpleMERNSetup/template.js"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,o(0)(e))},function(e,t){e.exports=require("mongodb")},function(e,t){e.exports=require("dotenv")},function(e,t,o){e.exports=o(9)},function(e,t,o){"use strict";o.r(t),function(e){var t,r=o(2),n=o.n(r),a=o(4),l=o(1),i=o.n(l),d=o(5),c=o(6),u=o(7),s=o.n(u);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;s.a.config();const p=n()(),f=process.cwd(),b=process.env.PORT||3e3,m=process.env.REACT_APP_MONGODB_URI||"mongodb://localhost:27017/simpleMERNSetup";var v,y;c.MongoClient.connect(m,(e,t)=>{console.log("Connected successfully to mongodb server"),t.close()}),a.a.compile(p),p.use("/dist",n.a.static(i.a.join(f,"dist"))),p.get("/",(e,t)=>{t.status(200).send(Object(d.a)())}),p.listen(b,e=>{e&&console.log(e),console.log("App is running at "+b)}),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(p,"app","/home/stt92/Documents/simpleMERNSetup/server/server.js"),v.register(f,"CURRENT_WORKING_DIR","/home/stt92/Documents/simpleMERNSetup/server/server.js"),v.register(b,"port","/home/stt92/Documents/simpleMERNSetup/server/server.js"),v.register(m,"url","/home/stt92/Documents/simpleMERNSetup/server/server.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,o(0)(e))},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,o){(function(e){var t;(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=o(1),n=o(3),a=process.cwd(),l={name:"browser",mode:"development",devtool:"eval-source-map",entry:["webpack-hot-middleware/client?reload=true",r.join(a,"client/main.js")],output:{path:r.join(a,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]}]},plugins:[new n.HotModuleReplacementPlugin,new n.NoEmitOnErrorsPlugin],resolve:{alias:{"react-dom":"@hot-loader/react-dom"}}};var i,d;e.exports=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(a,"CURRENT_WORKING_DIR","/home/stt92/Documents/simpleMERNSetup/webpack.config.client.js"),i.register(l,"config","/home/stt92/Documents/simpleMERNSetup/webpack.config.client.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,o(13)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);