console.log('this is my homework!')

// 1. Given the data below, define a type alias for representing users.
/// the type alias for users is an array of objects where each property has a primitive (name ---> string, age ---> number, company? ---> string with a question mark making it optional)

type User = {
    name:string;
    age: number;
    company?: string;
};

type UsersArray = User [];


let users: UsersArray = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];




// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type daysOfTheWeek = ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday');

let today: daysOfTheWeek = 'Saturday';
let tomorrow: daysOfTheWeek = 'Sunday';
let yesterday: daysOfTheWeek = 'Friday';

function weekendMessage(day: daysOfTheWeek): void{
    console.log(`The day is ${day}`);
}


weekendMessage(today);
weekendMessage(yesterday);
weekendMessage(tomorrow);



// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string
    ) {}

    get fullName(): string {
        return `Their name is ${this.firstName} ${this.lastName}`;
    }

}

const person = new Person ('Maria','Rodriguez');
const person2 = new Person('Braden','Bump')
const person3 = new Person('Taylor','Swift')
console.log(person.fullName);
console.log(person2.fullName);
console.log(person3.fullName)


// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Person2 {
    constructor(
        public firstName: string,
        public lastName: string,
    ){}

    get fullName2(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person2 {
    constructor(
        firstName: string,
        lastName: string,
        public salary: number
    ) {
        super(firstName, lastName);
    }
}

const worker = new Employee('Taylor', 'Swift', 1_000_000_000);
console.log(worker.fullName2);
console.log(worker.salary);




 



// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}


let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};


function printEmployeeInfo(employee: Employee): void {
    console.log(`Name: ${employee.name}`);
    console.log(`Salary: ${employee.salary}`);
    console.log(`Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.zipCode}`);
}