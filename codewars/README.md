## push一点codewars刷题代码







































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
                
