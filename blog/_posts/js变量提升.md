---
title: 'js变量提升'
date: '2020-7-10'
tags:
  - js
  - 变量声明提升
author: Leslie Zhu
location: Beijing
---

### Defination
```
   Variables declared with var in the global scope and variables declared with var in the scope of the function and functions declared with the function command, the program will automatically raise the variables declared in these three ways to the front of the scope of its scope. This is called variable promotion.
```
#### rule 1：变量声明提升
```
   // eg1
   console.log(a); //undefined
   var a = 2;
   
   // eg2
   a = 2;
   var a;
   console.log(a);  // 2

```

#### rule 2: 函数声明提升
```
   // eg1
   foo(); // 1
   function foo(){
       console.log(1); 
   }  
```

#### rule 3: 函数声明提升优先级高于变量声明提升
```
   // eg1
    foo(); // 1
    function foo(){
       console.log(1); 
    }
    var foo = 2;

    // eg2
    foo(); // 2
    var foo = function(){
        console.log(1)
    }  
    function foo(){
        console.log(2)
    }
    foo(); // 1
```

#### warning
   - 以上变量声明提升仅限于var关键字定义，let及const不存在此问题
   - 类似`a = 3`类型的全局变量也不存在声明问题提升
   - 以上规则指定义在全局作用域及函数作用域内规则

