// Basic Types

// Number
let id: number = 5;
let Age: number = 7;

//String
let company: string = 'FERBAMG';

//Boolean
let isPublished: boolean = true;

//Any
let x:any = 'Hello';

//Arrays
let ids: number[] = [1, 2, 3, 4]
let arrays: any[] = [1, 'love']

//Tuple
let person: [number, string, boolean] = [1, 'love', true]

//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'David']
]

//Union
let pid: string | number;
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

//console.log(Direction1.Up)
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
// console.log(Direction2.Up)

// Objects
type User = {
    iid: number,
    name: string
} 

const user: User = {
    iid: 1,
    name: 'John'
} 

// Type Assertion
let cid: any = 1
// let cusomerId = <number>cid
let customerID = cid as number;


// Functions 
function addNum(x: number, y:number): number {
    return x + y
}
// console.log(addNum(1, 2));

//void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces works similar ways as objects. Cant use interface with primitive or with objects
interface UserInterface {
    id: number
    name: string
    age?: number
} 
const user1: UserInterface= {
    id: 1,
    name: 'John',
} 

interface MathFunc{
    (x:number, y:number):number
}
const add: MathFunc = (x:number, y:number): number => x + y

interface PersonInterface {
    idd: string
    name: string
    register() : string
}

// Classes
// class Person  {
//     private id: number
//     name: string

//     constructor(id: number, name: string){
//         this.id = id,
//         this.name = name
//     }

//     register() {
//         return `${this.name} is now registered`
//     }
// }

// const brad = new Person(1, 'Emeka')
// console.log(brad.register())

class Person implements PersonInterface  {
    idd: string
    name: string

    constructor(idd: string, name: string){
        this.idd = idd,
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

// const brad = new Person(1, 'Emeka')
// console.log(brad.register())

//Sub Clases
class Employee extends Person{
    position: string

    constructor(idd: string, name:string, position:string){
        super(idd, name)
        this.position = position
    }
}

const emp = new Employee('1', 'shawn', 'Developer')

console.log (emp.name)

// Generics
function getArray <T> (items: T[]) : T[] {
    return new Array().concat(items)
}

let numArray = getArray <number> ([1,2,3,4])
let strArray = getArray <string>(['brad', 'John', 'Jill'])

numArray.push(5)
strArray.push('love')