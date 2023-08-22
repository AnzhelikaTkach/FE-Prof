// class User {
//     constructor(name, username, role){
//         this.name = name;
//         this.username = username;
//         this.role = role;
//     }
//     change_role(newRole) {
//         const validRoles = ["manager", "admin", "guest", "root"];
//         if(validRoles.includes(newRole)){
//             this.role = newRole;
//             console.log(`Role changed to ${newRole}`);
//         }else {
//             console.log(`Invalid role: ${newRole}`);
//         }
//     }
// }

//////////////////////////////////////////////////////////
// Задание. Добавить свойство status, и метод change_status которое может принимать одно из предложенных значений online, offline, work.

class User {
  static validRoles = ["manager", "admin", "guest", "root"];
  static users = [];
  static validStatus = ["online", " offline", "work"];

  static list_users() {
    User.users.forEach((user) =>
      console.log(
        `${user.name} - ${user.username} - ${user.role} - ${user.status}`
      )
    );
  }

  constructor(name, username, role, status) {
    this.name = name;
    this.username = username;
    this.role = role;
    this.status = status;
    User.users.push(this);
  }

  get fullName() {
    return `${this.name} - ${this.username}`;
  }
  // "Mike Mike56" => ["Mike", "Mike56"]
  set fullName(value) {
    const [newName, newUsername] = value.split(" ");
    this.name = newName;
    this.username = newUsername;
  }

  set change_role(newRole) {
    if (User.validRoles.includes(newRole)) {
      this.role = newRole;
      console.log(`Role changed to ${newRole}`);
    } else {
      console.log(`Invalid role: ${newRole}`);
    }
  }
  get change_role() {
    // return `Role changed to ${newRole}`
    return this.role;
  }

  change_status(newStatus) {
    if (User.validStatus.includes(newStatus)) {
      this.status = newStatus;
      console.log(`Status changed to ${newStatus}`);
    } else {
      console.log(`Invalid status: ${newStatus}`);
    }
  }
}

// DO NOT DO THIS
// XXXXXX console.log(User.validRoles);

// const user1 = new User("Joe", "Joe Jonas", "admin");
//console.log(user1.validRoles); //undefined

// getter / setter

// console.log(user1.fullName);
// user1.fullName = "Mike Mike56";
// console.log(user1.fullName);

// const user1 = new User("John" , "john123", "guest", "online");
// const user2 = new User("Jane" , "jane_ollin", "agmin", "online");
// const user3 = new User("Anna" , "anna_j", "manager", "offline");
// const user4 = new User("Bob" , "bob789", "root", "work");

// User.list_users();

/////////////////////////////////////////////////////////////////////

// Создать класс Product со свойствами title, price, count.

// Создать статическое свойство income, которое изначальное равно нулю.

// Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю, то вызывается исключение. Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.

// Создать статическое свойство items, которое хранит созданные экземпляры класса Product.

// Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.

class Product {
  static income = 0;
  static items = [];

  static product_list() {
    Product.items.forEach((product) =>
      console.log(`${product.title} - ${product.price} - ${product.count}`)
    );
  }

  constructor(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
    Product.items.push(this);
  }
  sale() {
    try {
      if (this.count > 0) {
        this.count--;
        Product.income += this.price;
        console.log(Product.income);
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  set change_price(newPrice) {
    if (newPrice > 0) {
      this.price = newPrice;
    } else {
      console.log("Wrong price");
    }
  }
  get change_price() {
    return ` ${this.title} - ${this.price}`;
  }
}

// const product1 = new Product("Book", 200, 5);
// const product2 = new Product("Book 3", 30, 6);

// product1.sale();

// Product.product_list();

// product2.change_price = 500;
// console.log(product2.change_price);

///////////////////////////////////////////////////////////////////

// Создайте класс Student со свойствами firstName, lastName и grades (массив чисел). Добавьте метод getter averageGrade, который вычисляет среднее значение всех оценок. Добавьте метод-сеттер addGrade, который принимает оценку в виде числа и добавляет ее в массив оценок.

class Student {

    constructor(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    get averageGrade() {

        let summ = this.grades.reduce((a,b) => a+b);
        return summ/this.grades.length;

    }

    set addGrade(grade) {
        
        this.grades.push(grade);

    }
}

// const studentOne = new Student ("Bob", "Peters", [5,7,6,9])

// studentOne.addGrade = 7;
// console.log(studentOne.averageGrade);

// Создайте класс Vehicle со свойствами make, model и year. Добавьте статический метод isAntique, который принимает экземпляр Vehicle и возвращает true, если свойство year имеет возраст более 25 лет, и false в противном случае.
// Для получения текущего года => const year = Date().getFullYear();

class Vehicle {

    static isAntique(object){
        let yearNow = new Date().getFullYear();
            return yearNow - object.year > 25;
    }

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const antique = new Vehicle("BMW", "E46", 1890);

console.log(Vehicle.isAntique(antique));