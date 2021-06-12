# let const var

## 1. var 关键字

* 声明的全局变量挂载在window对象下

  ```javascript
  var a = 1;
  console.log(window.a)
  ```

* 变量提升

  ```javascript
  console.log(a);
  var a = 1;
  ```

* 声明的变量可以重复声明和修改

  ```javascript
  var a = 1;
  var a = '111';
  console.log(a);
  ```

## 2. let 和 const 关键字

* let和const声明的全局变量不挂载在window对象下
* let 和 const 定义的变量不会出现变量提升现象，let/const 也存在变量声明提升，只是没有初始化分配内存。 一个变量有三个操作，声明(提到作用域顶部)，初始化(赋默认值)，赋值(继续赋值)，其实就是创建提升，因为没有初始化分配内存，所以使用该变量就会报错，这是暂时性死区
* let 和 const 是JS中的块级作用域
* let 和 const 不允许重复声明(会抛出错误)
* const 声明一个只读的常量。一旦声明，常量的值就不能改变(如果声明是一个对象，那么不能改变的是对象的引用地址)

