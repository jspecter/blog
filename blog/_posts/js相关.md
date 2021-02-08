---
title: js相关
date: 2020-5-09
tags: 
    - JS
author: Leslie Zhu
location: Beijing
---

1.  **hasOwnProperty方法：**
    所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。 
2.  ** Object.assign 与 ... 比较 **
    > The spread operator and Object.assign() are very similar. The main difference is that spreading defines new properties, while Object.assign() sets them 

    一言以蔽之，Object.assign会通过setter来修改对象属性，且会污染对象原型属性；而对象展开符只是单纯的copy对象，会通过类似defineProperty来在对象上定义一个新的属性，而不会侵入对象原型。
    [详情参考](https://2ality.com/2016/10/rest-spread-properties.html#spread-defines-properties-objectassign-sets-them)
3.  Object.assign的android及ios低版本兼容问题：
    - 将Object.assign替换为对象展开符...
    - 使用npm包[object.assign](https://www.npmjs.com/package/object.assign) 或者 [object-assign](https://www.npmjs.com/package/object-assign)来做polyfill
    - 使用babel插件[@babel/plugin-transform-object-assign](https://babeljs.io/docs/en/babel-plugin-transform-object-assign)来做转义

        
