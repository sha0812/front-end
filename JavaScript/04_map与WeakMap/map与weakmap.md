# map与weakmap

## 1. map

### 1.1 map特点

* Map的键和值可以是任何数据类型

  ```javascript
  //1. map的键名可以是任意数据
  var map = new Map();
  var o = {num:1};
  map.set(o,'111');
  console.log(map);
  ```

* 键值对按照插入顺序排列

  ```javascript
   // map有顺序
   var map = new Map([[2,'111'],[1,'222']]);
   console.log(map);
  
  // obj自动排序
  var obj = {'2':'111','1':'222'}
  console.log(obj);
  ```

* map数据可迭代，object数据不可迭代

  ```
  var map = new Map([[2,'111'],[1,'222']]);
  console.log(map);
  for(var value of map){
  	console.log(value)
  }
  ```

### 1.2 map的常用属性

| 操作方法           | 内容描述                                     |
| ------------------ | -------------------------------------------- |
| map.set(key,value) | 添加键值对到映射中                           |
| map.get(key)       | 获取映射中某一个键的对应值                   |
| map.delete(key)    | 将某一键值对移除映射                         |
| map.clear()        | 清空映射中所有键值对                         |
| map.entries()      | 返回一个以二元数组（键值对）作为元素的数组   |
| map.has(key)       | 检查映射中是否包含某一键值对                 |
| map.keys()         | 返回一个当前映射中所有键作为元素的可迭代对象 |
| map.values()       | 返回一个当前映射中所有值作为元素的可迭代对象 |
| map.size           | 映射中键值对的数量                           |

```javascript
let map = new Map();
let o = {n: 1};
// 给map添加o属性，值是’A‘
map.set(o, "A"); 
// 给map添加'2'属性，值是9
map.set("2", 9);
// 判断是否存在’2‘属性
console.log(map.has("2")); 
// 获取o属性值
console.log(map.get(o)); 
console.log(...map);
// 查看map
console.log(map);
// 删除’2‘属性
map.delete("2"); 
// 清空所有属性
map.clear(); 
//create a map from iterable object
let map_1 = new Map([[1, 2], [4, 5]]);
console.log(map_1.size); //number of keys

```

### 1.3 遍历map数据

- `keys()`：返回键名的遍历器
- `values()`：返回键值的遍历器
- `entries()`：返回键值对的遍历器
- `forEach()`：使用回调函数遍历每个成员

```javascript
const map = new Map([
  ['a', 1],
  ['b', 2],
])

for (let key of map.keys()) {
  console.log(key)
}
// "a"
// "b"

for (let value of map.values()) {
  console.log(value)
}
// 1
// 2

for (let item of map.entries()) {
  console.log(item)
}
// ["a", 1]
// ["b", 2]

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value)
}
// "a" 1
// "b" 2

// for...of...遍历map等同于使用map.entries()

for (let [key, value] of map) {
  console.log(key, value)
}
// "a" 1
// "b" 2
```

## 2. WeakMap

### 2.1 WeakMap特点

`WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合。

- 只接受对象作为键名（`null` 除外），不接受其他类型的值作为键名

  ```javascript
    // 1. 只能使用对象作为键名
    var weakmap = new WeakMap();
    // weakmap.set('a',111);
    var o = {num:1};
    weakmap.set(o,111);
    console.log(weakmap);
  ```

- 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的

  ```javascript
   // 2. 键名是弱引用，如果键名销毁，该属性就销毁 (IE打开)
   var weakmap = new WeakMap();
   var o = {num:1};
   weakmap.set(o,111);
   o = null;
   console.log(weakmap);
  ```

- 不可枚举，枚举影响其列表将会受垃圾回收机制的影响，方法有 `get`、`set`、`has`、`delete`

  