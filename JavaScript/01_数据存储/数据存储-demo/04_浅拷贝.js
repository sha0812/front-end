var userName = '闷倒驴';
var user = { userName: '闷倒驴', sex: '女', body: { weight: '50kg', height: '160' } }
// 浅拷贝
var userCopy = Object.assign({}, user);
user.sex = '男';
user.body.weight = '100斤';

console.log(user);
console.log(userCopy);