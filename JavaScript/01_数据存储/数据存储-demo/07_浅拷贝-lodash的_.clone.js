var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.clone(obj1);
console.log(obj2);
obj1.a = 0;
obj1.b.f.g = 1000;
console.log(obj1);
console.log(obj2);
