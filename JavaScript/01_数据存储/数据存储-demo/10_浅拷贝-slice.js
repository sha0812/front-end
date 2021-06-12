let arr = [1, 3, {
    username: ' 王美丽'
}];
let arr3 = arr.slice();
arr3[2].username = '闷倒驴'
console.log(arr); // [ 1, 3, { username: '闷倒驴' } ]