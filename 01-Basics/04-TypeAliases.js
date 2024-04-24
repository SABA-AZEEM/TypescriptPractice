function add(obj) {
    return obj.no1 + obj.no2;
}
var result1 = add({ no1: 2, no2: 3 });
console.log("result of addition is:", result1);
function sub(obj) {
    return obj.no1 - obj.no2;
}
var result2 = sub({ no1: 5, no2: 2 });
console.log("Result of subtraction is:", result2);
