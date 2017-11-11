# yxhj

>一个仿[异乡好居](https://m.uhouzz.com/apartments)的vue入门项目


### 技术栈：
vue2+vuex+vue-router+es6/es7+webpack+scss+flex+nodejs+express+mysql


### 项目结构：
``` bash
# src是前端源代码编辑区
# server是服务端源代码编辑区
```


### 安装启动步骤：
``` bash
# 将项目clone到本地，安装和启动分为服务端和前端两块
#服务端安装：
  1、cd server到server文件夹中，npm install安装后端相关依赖
  2、将文件夹中的yxhj.sql导入数据库
  3、启动数据库服务器
  4、node app启动后端express服务器
  5、node websocket启动websocket服务器
  
# 前端安装：
  1、cd..到最外层目录，npm install安装前端相关依赖
  2、npm run dev前端服务
```


### 项目说明：
``` bash
  这是我的第一个vue项目，公司一直是处在jquery时代，为了不被时代淘汰自己空余时间学习vue。
  此项目是我边查文档边写的，写到哪查到哪，所以很多地方写得不够好，如父子组件传递状态时，开始没用vuex，让代码显得很混乱。但踩坑才能理解得更好，毕竟是入门。
  此项目不大，但vue的核心内容都包含进去了：
    · 路由：嵌套路由、路由传参、编程式导航、路由监听、懒加载
    · 组件：组件基本运用、父子组件传递状态
    · vuex管理状态
    · ajax请求数据
    · class&style绑定
    · 过渡&动画
    · 等等
```


### 项目截图：
  <img src='src/static/imgs/md_1.gif' width='48%'> <img src='src/static/imgs/md_2.gif' width='48%'>

### 项目用于学习交流, 转载请注明出处





