// $.extend(deepCopy, target, object1, [objectN])//第一个参数为true,就是深拷贝

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();

var $ = jQuery = require('jquery')(window);
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); // false