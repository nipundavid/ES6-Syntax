// Old way

// ES6

console.log("---------------Old---------------------");
// variable names
// Old way
var name = "Nipun David";
console.log("My Name is "+name);
// ES6
console.log("---------------ES6---------------------");
const new_name = "Nipun David";
console.log("My name is ${new_name}");

console.log("---------------Old---------------------");
// object literals
// Old way
function getBook(title, author) {
    return {
        title : title,
        author : author
    }
}

let myBook = getBook("Machine Learning", "Tom Mitchell");
console.log(myBook);
// ES6
function newGetBook(title, author) {
    return {
        title,
        author
    }
}

var newMyBook = getBook("Deep Learning", "By Google");
console.log(newMyBook);

console.log("---------------Old---------------------");
//Object Deconstruction
// Old way
var user = {
    name : "Nipun",
    age : "29"
};

var myName = user.name;
console.log(myName);

// ES6
console.log("---------------ES6---------------------");
const list = {
    listName : "shopping list",
    items : ["Milk", "Cow"]
};

const {listName, items} = list;
console.log(listName, items);

console.log("---------------Old---------------------");
//arrow Functions
// Old way
function sayName () {
    console.log("Hi! I am Nipun");
};

var sayAge = function() {
    console.log("My age is 29");
};

sayName();
sayAge();
// ES6
console.log("---------------ES6---------------------");
const setLocation = (location) => {
    console.log("My location is ${location}");
}

// const setLocation = (location) => console.log("My location is ${location}");
// const setLocation = location => console.log("My location is ${location}");

setLocation("India");

console.log("---------------Old---------------------");
// This using arrow fucntion
// Old way
 var user = {
     name : "ND",
     age : "29",
     sayName : function() {
         console.log("My name is "+this.name);
         var that = this; // Problem 
         var sayProfile = function() {
            console.log("My name is "+that.name+" and my age is "+that.age);
         };
         sayProfile();
     }
 };
 user.sayName();
// ES6
console.log("---------------ES6---------------------");
const newUser = {
    name : "ND",
     age : "29",
     sayName : function() {
        console.log("My name is "+this.name);
        const sayProfile = () => {
            console.log("My name is "+this.name+" and my age is "+this.age);
        }
        sayProfile();
     }
}

newUser.sayName();

console.log("---------------Old---------------------");
//default parameters
// Old way
function multiply (x, y) {
    var a = x || 1; // default values
    var b = y || 1; // default values
    console.log(a*b);
}
multiply();
multiply(2, 2);
// ES6
console.log("---------------ES6---------------------");
function newMmultiply (x = 1, y = 1) { // new sytax
    console.log(x*y);
}
newMmultiply();
newMmultiply(10,10);

console.log("---------------Old---------------------");
// array function
// Old way

// ES6
console.log("---------------ES6---------------------");
//foreach
const secondList = ["milk", "Cookies", "Eggs"];

secondList.forEach((product, index) => {
    console.log(index+":"+product);
});
//map -> Copies the data from the array 
const copyList = secondList.map((items)=> {
    return items + " new";
});
console.log(copyList);

//filter
const filterList = secondList.filter((items)=> {
    return items === "Eggs";
});
console.log(filterList);

console.log("---------------Old---------------------");
// Constructor function
// Old way
function Person(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

var nd = new Person("Nipun David", "29", "Black");

console.log(nd);

// add more function in the class Person
Person.prototype.secondSayName = function () {
    console.log("My Name is "+this.name);
}

nd.secondSayName();
// ES6
console.log("---------------ES6---------------------");
class classList {
    constructor(items, nos) {
        this.items = items;
        this.nos = nos;
    }
    sayList () {
        console.log(this.items);
    }
}

const myList = new classList(["Milk, choco, eggs"], 3);
myList.sayList();

class Product extends classList{ // inheritance
    constructor (items, nos, amount, cost) {
        super(items, nos); // pass in the base class
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(["Gems", "Rusk", "Bread"], 3, 2, 20) 
console.log(product);
product.sayList(); // inherited function called


// Promises -> Replacement of the callbacks
//Old Way
console.log("---------------Old---------------------");

console.log("Start"); // Async
function getData(data, callback) {
    setTimeout(()=> {
        console.log("Reading from the data");
        callback({data: data});
    }, 2000);
}

getData(5, function(data) {
    console.log(data)
});
console.log("finish"); // Async

//ES6 Way
console.log("---------------ES6---------------------");

const prom = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve({user: "ND", Pass : "123456"});
        reject(new Error("some error"));
    }, 2000);
})

prom.then(data=> {
    console.log(data);
})
.catch(err => console.log(err));