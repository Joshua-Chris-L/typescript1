

// Basic Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Number
var id = 5;
var Age = 7;
//String
var company = 'FERBAMG';
//Boolean
var isPublished = true;
//Any
var x = 'Hello';
//Arrays
var ids = [1, 2, 3, 4];
var arrays = [1, 'love'];
//Tuple
var person = [1, 'love', true];
//Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'David']
];


//Union
var pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
//console.log(Direction1.Up)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    iid: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
// let cusomerId = <number>cid
var customerID = cid;
// Functions 
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
//void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};

var add = function (x, y) { return x + y; };
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
var Person = /** @class */ (function () {
    function Person(idd, name) {
        this.idd = idd,
            this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
// const brad = new Person(1, 'Emeka')
// console.log(brad.register())
//Sub Clases
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(idd, name, position) {
        var _this = _super.call(this, idd, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee('1', 'shawn', 'Developer');
console.log(emp.name);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(5);
strArray.push('love');
