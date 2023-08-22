// class Dog {
//     constructor(dogName){
//         this.name = dogName;
//     }
//     // addName(dogName){
//     //     this.name = dogName;
//     // }
// }
// const dog_1 = new Dog("Sharik");
// const dog_2 = new Dog();
// dog_1.name = "Bobik";
// dog_2.name = "Sharik";
// dog_1.addName("Bobik");
// dog_2.addName("Sharik")

// console.log("dog 1 -", dog_1);
// console.log("dog 2 -", dog_2);

// Задание 1. Создать класс User со свойствами name, username, age.

// Задание 2. Добавить метод b_day которое увеличивает возраст на единицу.

// Задание 3. Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его.
class User {
    constructor(name, username, age) {
        this.name = name;
        this.username = username;
        this.age = age;
    }
    b_day(){
        this.age++;
    }
    change_username(newUserName){
        this.username = newUserName;
    }
}

// const user_1 = new User("Anzhelika", "Anz", 11);
// console.log("user", user_1);

// user_1.b_day();
// console.log("user", user_1);

// user_1.change_username("Dima");
// console.log("user", user_1);

/////////////////////////////////////////////////////
// Задание Создать класс Product со свойствами title, price, count. И методами change_price и sale.
// Метод change_price принимает аргумент new_price и устанавливает свойство price в это новое значение.

// Метод sale принимает аргумент discount_percent, рассчитывает скидку на основе этого процента и вычитает ее из свойства price.

// Доработать метод change_price, который принимает в качестве аргумента новую цену и делает проверку, если цена меньше нуля то цена не меняется и вызывается исключение “цена не может быть отрицательной”.

class Product {
    constructor(title, price, count){
        this.title = title;
        this.price = price;
        this.count = count;
    }
    change_price(new_price){
        try{
            if(new_price < 0){
                throw new Error("цена не может быть отрицательной")
            }
            this.price = new_price;
        }catch(e){
            console.log(e.message)
        }
    }
    sale(discount_percent){
        const discount = (this.price / 100) * discount_percent;
        this.price -= discount; 
    }
    sell(){
        try{
            if(this.count === 0){
                throw new Error("товар закончился")
            }
            this.count--;
        }catch (e){
            console.log(e.message)
        }
    }
}

// const product_1 = new Product("water", 100, 2);
// console.log("1 ====>",product_1);

// product_1.change_price(50);
// console.log("2 ====>",product_1);

// product_1.sale(3);
// console.log("3 ====>",product_1);

// product_1.change_price(-100);
// console.log("4 ====>",product_1);

// product_1.sell();
// console.log("5 ====>",product_1);

// product_1.sell();
// product_1.sell();
// Добавьте новый метод sell, который уменьшает count на единицу. Но если count уже равен нулю, то вызывается исключение “товар закончился”.



// Создайте класс BankAccount со свойствами balance и accountNumber. Добавьте в класс методы, позволяющие пользователю вносить деньги на счет, снимать деньги со счета и проверять баланс счета.

class BankAccount {
    constructor(balance, accountNumber){
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    depositMoney(newBalance){
        this.balance += newBalance;
    }
    withdrawMoney(new_balance){
        if(this.balance >= new_balance){
        this.balance -= new_balance;
        }else{
            console.log("Not enough");
        }
    }
    checkBalance(){
        console.log(this.balance);
    }
}

// const bankAcc_1 = new BankAccount(1000, 1);
// console.log("1 ====>",bankAcc_1);

// bankAcc_1.depositMoney(2000);
// console.log("2 ====>",bankAcc_1);

// bankAcc_1.withdrawMoney(5000)
// console.log("3 ====>",bankAcc_1);

// bankAcc_1.checkBalance();

//////////////////////////////////////////////////////////////////

// Создайте класс Student со свойствами name, age, email и grades(массив с оценками) , а также методы addGrade и getAverageGrade. Метод addGrade должен принимать оценку и добавлять ее в массив grades, если оценка является числом от 0 до 100. Если оценка не является числом или находится вне диапазона 0-100, метод должен выдать ошибку. Метод getAverageGrade должен вычислить средний балл всех оценок в массиве grades и вернуть его.

class Student {
    constructor(name, age, email, grades){
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = grades;
    }
    addGrade(score){
        if(score > 0 && score <= 100){
        this.grades.push(score);
        }else if(typeof score !== "number"){
        console.log("Error");
        }else{
        console.log("Error");
        }
    }
    getAverageGrade(){
        let summ = this.grades.reduce((acc, curr) => acc + curr
        );
        let averageScore = summ / this.grades.length;
        return averageScore;
    }
}

// const student_1 = new Student("Anz", 11, "dsdcscv", [60, 70, 50, 80]);
// student_1.addGrade(100);
// console.log("1 ====>", student_1);

// student_1.getAverageGrade();
// console.log("2 ====>", student_1.getAverageGrade());

// Создайте класс с именем Rectangle, который имеет свойства width и height, а также методы getArea и getPerimeter. Метод getArea должен вычислять площадь прямоугольника путем умножения ширины на высоту. Метод getPerimeter должен вычислять периметр прямоугольника путем сложения ширины и высоты и умножения результата на два. Оба метода должны выдавать ошибку, если свойство width или height не является числом или меньше или равно нулю.

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        if(typeof this.width !== "number" || this.width <= 0  ){
            console.log("Error");
        }else if(typeof this.height !== "number" || this.height <= 0){
            console.log("Error");
        }else{
            let area = this.width * this.height;
            return area;
        }
    }
    getPerimeter(){
        try{
            if(typeof this.width !== "number" || this.width <= 0 ){
                throw new Error("Error");
            }else if(typeof this.height !== "number" || this.height <= 0){
                throw new Error("Error");
            }else{
                let perimeter = (this.width + this.height) * 2;
                return perimeter;
            }
        }catch(e){
            console.log(e.message);
        }
    }
}

const rectangle_1 = new Rectangle(20,25);
console.log("1 ====>", rectangle_1)

rectangle_1.getArea()
console.log(rectangle_1.getArea());
console.log(rectangle_1.getPerimeter());

