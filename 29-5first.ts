function sum1(num1:number, num2:number){
    return num1 + num2;
}
const result:number = sum1(2, 3)
console.log(result);


function user(firstName:string, lastName:string){
    return firstName + lastName;
}
//const result2:number = user("adam", "sandler"); ////u can't do this cz u declare the parameter in string;

const result1:string = user("adam", "sandler"); //// u should do this;
console.log(result1);



function calculate(p:string | number, q:string){
    return p + q;
}

console.log(calculate(4, "3"))