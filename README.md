demo效果：[https://lingyi0-1.github.io/learn-vuex.github.io/](https://lingyi0-1.github.io/learn-vuex.github.io/)  
原文地址：[https://segmentfault.com/a/1190000005863691#articleHeader15](https://segmentfault.com/a/1190000005863691#articleHeader15)

## 前言

这是一个demo,与原文demo不同的地方是：

```
1. 使用vue-cli3.0（原文的是vue-cli2.0）
2. vue2.0(原文的是vue1.0)。这里要注意生命周期钩子函数和vuex的不同
3. 对原本demo进行了功能的优化
```

## 所用技术

```
1. html
2. css+sass
2. js+es6
3. vue+vue-cli+vuex
4. bootstrap
```

## 优化的功能

主要的功能请看原文，优化的地方有：

```
1. 原demo中，可以添加标题和内容为空的笔记。这里,没有在编辑区展开的笔记的标题不能为空，否则自动删除
2. 原demo中，当没有可渲染的笔记时，编辑区依然可以编辑但编辑的内容无效。在这里，当没有可渲染的笔记时，编辑区是禁用状态
3. 原demo中，当渲染的列表是‘收藏的笔记’时，新添加的笔记标题渲染在“全部笔记”但渲染的列表仍然是“收藏的笔记”。这里，新添加笔记时渲染的列表变为“全部笔记”
4. 删除一篇笔记后，编辑区显示的是“全部笔记”的第一项。这里，删除一篇笔记后显示的是当前笔记类别的第一项
```

## 初始化应用

```
npm install //安装依赖包
npm run serve //启动服务
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
