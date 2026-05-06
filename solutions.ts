
// Problem 1: filterEvenNumbers

function filterEvenNumbers(numbers:number[]):number[]{
    const evenNumbers=numbers.filter(num=>num%2===0);
    return evenNumbers;
}

// Problem 2: reverseString

function reverseString(input:string):string{
    const reverseInput=input.split("").reverse().join("")
    return reverseInput;
}

//Problem 3: checkType

type StringOrNumber=string | number;
function checkType(input:StringOrNumber):"String"|"Number"{
    if(typeof input === "string"){
        return "String"
    }
    return "Number"
}

//Problem 4: getProperty

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}

//Problem 5: toggleReadStatus

interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

function toggleReadStatus (book:Book):Book & {isRead:boolean}{
    const status={
        ...book,
        isRead:true
    }
    return status;
}

//Problem 6: class Person & subclass Student

class Person{
name:string;
age:number;
constructor (name:string,age:number){
    this.name=name;
    this.age=age;
}
}

class Student extends Person{
    grade:string;
    constructor (name:string,age:number,grade:string){
    super(name,age);
    this.grade=grade;
}
getDetails():string{
return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
}
}


//Problem 7: getIntersection

function getIntersection(arr1:number[],arr2:number[]):number[]{
    const newArr=arr1.filter(arr=>arr2.includes(arr))
    return newArr;
}
