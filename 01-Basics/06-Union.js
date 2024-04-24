function fun(id) {
    if (typeof id === 'string') {
        return "Saba Azeem";
    }
    else {
        return 24;
    }
}
var result1 = fun("123");
console.log("result of string is:", result1);
var result2 = fun(123);
console.log("result of number is:", result2);
