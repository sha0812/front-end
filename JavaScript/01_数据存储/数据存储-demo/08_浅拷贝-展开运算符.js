let obj1 = { name: '王美丽', address: { x: 100, y: 100 } }
let obj2 = { ...obj1 }
obj1.address.x = 200;
obj1.name = '闷倒驴'
console.log('obj2', obj2) // obj2 { name: 'Kobe', address: { x: 200, y: 100 } }