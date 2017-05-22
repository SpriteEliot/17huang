#开发者文档
============ 


##框架
基于vue构建
1，`vue-cli`脚手架搭建。
2，状态管理：`vuex`，用于数据管理，大部分的动态数据在vuex中管理，如：ajax请求数据，数据修改，数据的存放。
3，由于开发使用热加载视图，后台地址需要进行配置。而在打包文件中，可使用api原地址

##环境搭建:
---------------------
###环境需求
1:`node`，v6.10.3,
2:`npm`,4.5.0,如部分模块无法安装，请尝试切换至国内淘宝镜像版。


###  环境安装
1：文件目录下，CMD输入命令`npm install -force`,安装依赖模块
2：`node-sass`需额外安装，输入命令：`npm install -g cnpm --registry=https://registry.npm.taobao.org`,然后输入`cnpm install node-sass`
3：`vue-cli`。 
4：`vuex`模块需额外安装，当前根目录CMD输入`npm install vuex --save-dev`.


## 运行 命令提示符窗口打开到当前目录，输入命令即可。
------------------------------------
1，热加载文件：`npm run dev`.
2，打包文件：`npm run build`。打包文件保存地址:当前目录的dist文件夹下，将dist文件夹下的文件发布到服务器即可。

##文件目录
------------

见附录：文件树状图







































附录：文件树状图
E:\WAMP\WWW\WEBPACK\VUE\HUANGYOU-NEWS-CENTER

│  index.html                           //主要html 文件
│  package.json                         //webpack 安装JSON
│  README.md                            //开发文档
│  tree.txt                             //文件树，不包括node_modules文件夹
│  
├─build                                 //webpack 打包配置文件
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│      
├─config                                //webpack 打包配置文件
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│       
├─dist                                   //打包文件存放目录
│  │  index.html
│  │  
│  └─static                             //静态资源文件夹
│      ├─css
│      │  │  app.c5678a2bfc58659856f8732d9279e5c5.css
│      │  │  app.c5678a2bfc58659856f8732d9279e5c5.css.map
│      │  │  index.css
│      │  │  wangEditor.css
│      │  │  wangEditor.less
│      │  │  wangEditor.min.css
│      │  │  
│      │  ├─bootstrap
│      │  │      bootstrap-theme.css
│      │  │      bootstrap-theme.css.map
│      │  │      bootstrap-theme.min.css
│      │  │      bootstrap.css
│      │  │      bootstrap.css.map
│      │  │      bootstrap.min.css
│      │  │      
│      │  └─fonts
│      │          glyphicons-halflings-regular.eot
│      │          glyphicons-halflings-regular.svg
│      │          glyphicons-halflings-regular.ttf
│      │          glyphicons-halflings-regular.woff
│      │          glyphicons-halflings-regular.woff2
│      │          
│      ├─fonts
│      │      icomoon.eot
│      │      icomoon.svg
│      │      icomoon.ttf
│      │      icomoon.woff
│      │      
│      ├─img
│      │      bg.png
│      │      favicon.ico
│      │      head.jpg
│      │      
│      └─js
│          │  app.e03456c788b7a0852acb.js
│          │  app.e03456c788b7a0852acb.js.map
│          │  bootstrap.min.js
│          │  jquery-2.2.4.min.js
│          │  manifest.d3059d91586824ff5db0.js
│          │  manifest.d3059d91586824ff5db0.js.map
│          │  vendor.7b6d44f83c60d2eff33f.js
│          │  vendor.7b6d44f83c60d2eff33f.js.map
│          │  wangEditor.js
│          │  wangEditor.min.js
│          │  
│          └─lib
│                  jquery-1.10.2.min.js
│                  jquery-2.2.1.js
│                  
├─src                            //组件目录
│  │  App.vue                    //入口文件
│  │  common.js                  //公共JS封装
│  │  main.js                    //主要JS
│  │  
│  ├─assets 
│  │      logo.png
│  │      
│  ├─components                  //单文件vue 存放目录
│  │  │  index.vue               //主页文件
│  │  │  
│  │  ├─features                 //功能vue目录
│  │  │      bulletin.vue
│  │  │      bulletinList.vue
│  │  │      connect.vue
│  │  │      editor.vue
│  │  │      email.vue
│  │  │      emailList.vue
│  │  │      message.vue
│  │  │      messageList.vue
│  │  │      messageNo.vue
│  │  │      messagesend.vue                  
│  │  │      msgrule.vue
│  │  │      template.vue
│  │  │      templateList.vue
│  │  │      writearea.vue
│  │  │      
│  │  └─view                      //视图vue目录          
│  │          copyright.vue
│  │          menu.vue
│  │          nav.vue
│  │          person.vue
│  │          
│  ├─router                        //v-router 路由目录
│  │      index.js
│  │      
│  └─store                          //vuex状态管理文件夹
│      │  index.js
│      │  
│      └─modules                  //vuex模块文件夹
│              email.js
│              menu.js
│              phone.js
│              templatelist.js
│              
├─static                            //静态资源
│  │  .gitkeep
│  │  
│  ├─css
│  │  │  index.css
│  │  │  wangEditor.css
│  │  │  wangEditor.less
│  │  │  wangEditor.min.css
│  │  │  
│  │  ├─bootstrap
│  │  │      bootstrap-theme.css
│  │  │      bootstrap-theme.css.map
│  │  │      bootstrap-theme.min.css
│  │  │      bootstrap.css
│  │  │      bootstrap.css.map
│  │  │      bootstrap.min.css
│  │  │      
│  │  └─fonts
│  │          glyphicons-halflings-regular.eot
│  │          glyphicons-halflings-regular.svg
│  │          glyphicons-halflings-regular.ttf
│  │          glyphicons-halflings-regular.woff
│  │          glyphicons-halflings-regular.woff2
│  │          
│  ├─fonts
│  │      icomoon.eot
│  │      icomoon.svg
│  │      icomoon.ttf
│  │      icomoon.woff
│  │      
│  ├─img
│  │      bg.png
│  │      favicon.ico
│  │      head.jpg
│  │      
│  └─js
│      │  bootstrap.min.js
│      │  jquery-2.2.4.min.js
│      │  wangEditor.js
│      │  wangEditor.min.js
│      │  
│      └─lib
│              jquery-1.10.2.min.js
│              jquery-2.2.1.js
│              
└─test
    ├─e2e
    │  │  nightwatch.conf.js
    │  │  runner.js
    │  │  
    │  ├─custom-assertions
    │  │      elementCount.js
    │  │      
    │  └─specs
    │          test.js
    │          
    └─unit
        │  .eslintrc
        │  index.js
        │  karma.conf.js
        │  
        └─specs
                Hello.spec.js
                
