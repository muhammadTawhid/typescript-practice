// Array
const numbers: number[] = [3,54,654,76,4,4];
numbers.push(42);

const friendsName :string[] = ["gorege", "abu", "jds", "jit"];
let megaName:string = "";
for (let i = 0; i < friendsName.length; i++) {
    const friend:string = friendsName[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
}

console.log("friends with largest name", megaName);

// Object

const friends:{name:string, salary:number} = { name: "abul", salary: 173}
// or
let player:{name:string, salary: number};  /////this is the object structure;
player = {name:"arnold", salary: 324}