var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 2 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
obj1.b.f = '改变f属性';
console.log(obj1,obj2);// false