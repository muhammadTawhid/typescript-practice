function sum (num:number):void {
    num * 2;
}
const result3 = sum(2);
console.log(result)

const multipy = (x:number, y:number):number => x * y;
console.log(multipy(2, 4));

let multipy2 : (x:number, y:number) => number;
multipy2= (x, y) => x*y;