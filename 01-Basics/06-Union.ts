type  userId = number | string ;

function fun(id:userId): number | string{
    if(typeof id === 'string'){
        return "Saba Azeem";
    }else{
        return 24;
    }
}

let result1 = fun("123");
console.log("result of string is:",result1);

let result2 = fun(123);
console.log("result of number is:",result2);