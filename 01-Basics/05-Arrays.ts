// String example of array
let fruits : string[] = [];
fruits.push("Apple");
fruits.push("Orange");
fruits.push("Banana");

console.log("Array of fruits are:", fruits);

// Number example of array, we use also this syntax for type annotation
let no : Array<number> = [];
no.push(1);
no.push(2);
no.push(3);

console.log("Number in array are:",no);

//Any data type example
let data : any[] = [];

data.push({name:"Saba Azeem",qualification:16});
data.push('Sana Khalid');
data.push(50000);

console.log("Data array consist following data:",data);