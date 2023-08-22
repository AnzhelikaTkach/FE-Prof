// function sayHi() {
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
// }

// const person1 = {
//     name: "Alisa",
//     age: 20,
//     sayHi: sayHi,
// };

// const person2 = {
//     name: "Bob",
//     age: 30,
//     sayHi: sayHi,
// };

// person1.sayHi();
// person2.sayHi();

// call, apply, bind

//call 
// functionName.apply(thisObj, arg1, arg2, ...)
function sayHi(greeting, bye) {
    console.log(`${greeting}, my name is ${this.name} and I'm ${this.age} years old, ${bye}`);
}

const person1 = {
    name: "Alisa",
    age: 20,
    sayHi: sayHi,
};

const person2 = {
    name: "Bob",
    age: 30,
    sayHi: sayHi,
};

// sayHi.call(person1, "Hello");
// sayHi.call(person2, "Hi");

// apply
// functionName.apply(thisObj, [obj1, obj2, ....])

// sayHi.apply(person1, ["Privet"]);

//bind
// const newSayHi = sayHi.bind(person2,"helloooooo");
// newSayHi("Goodbye");

// console.log(this) // window object

// Создайте объект со свойством value и методом, который умножает значение на заданный коэффициент. Создайте второй объект со свойством value и используйте метод call для вызова метода первого объекта с контекстом второго объекта, передавая коэффициент в качестве аргумента.Используйте так же apply для решения этой задачи.

const obj1 = {
    value: 10,
    method: function(number){
        return this.value *= number;
    }
}

const obj2 = {
    value: 5
}

obj1.method.call(obj2, 2);
console.log(obj2.value); // 10

///////////////////////////////////////////////////////////////

// Создайте объект со свойством name и метод, выводящий приветственное сообщение с помощью аргументов. Как аргумент принимает приветственное слово и знак препинания в конце предложения. Так же создайте новый обьект со свойством  name. Создайте новую функцию с помощью bind, которая имеет второй объект в качестве значения this и приветственное слово как аргумент, и вызовите новую функцию где будете передавать второй аргумент -  знак препинания в конце предложения.

const object1 = {
    name: "You",
    greeting: function(greeting, arg){
        console.log(`${greeting} ${this.name} ${arg}`)
    } 
}

const object2 = {
    name: "Anzhelika",
}

// const newGreeting = object1.greeting.bind(object2, "Hi");
// newGreeting("!");

// 4 правила формирования this:
// 1) Default binding // func() - low priority
// 2) Implicit binding  // func.method()
// 3)Explicit binding - call, apply
// 4)New binding - bind - High priority


const person = {
    _name: "Joe",
    greet: function() {
        console.log(`Hi, ${this._name}`);
    },
    greetArrow: () => {
        console.log(this);
        console.log(`Hello, ${this._name}`);
    },
};

person.greet();
person.greetArrow();