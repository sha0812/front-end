var JSON = require('JSON');
let arr = [1, 3, {
    username: '闷倒驴'
}];
let arr1 = JSON.parse(JSON.stringify(arr));
arr1[2].username = '王美丽';
console.log(arr, arr1)