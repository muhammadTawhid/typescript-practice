class Person {
    name: string
    salary: number
    #wifeName: string
    // private _wifeName:string
    readonly fatherName: string
    constructor(name:string, salary:number, wifeName:string, fatherName: string) {
        this.name = name
        this.salary = salary
        this.#wifeName = wifeName
        this.fatherName = fatherName
    }
    getName(): string{
        return this.name;
    }
}

const sam = new Person("samual", 898, "samia", "baperName                    " );
console.log(sam.name, sam.salary);
const samName:string = sam.getName();


