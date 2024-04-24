

function add(obj:{no1:number ; no2:number}) : number {
    return obj.no1+ obj.no2;
}

let result1 = add({no1:2,no2:3});
console.log("result of addition is:",result1);

// Now if i've some methods that are use same type annotation, then we solve this with the help of type annotation

//Type Aliases
type ObjNo = {
    no1:number;
    readonly no2:number;
};
type result = number;

function sub(obj:ObjNo) : result {
    //obj.no2 = 8;  //Cannot assign to 'no2' because it is a read-only property
    return obj.no1 - obj.no2 ;
}
let result2 = sub({no1:5 , no2: 2});
console.log("Result of subtraction is:", result2);

//NOw same as the add function , we use type annotation in add function