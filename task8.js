// 1. Написать функцию-консторуктор,
// которая в качестве параметров принимает 3 значения - имя, фамилия и возраст. 
// Функция-консторуктор также будет иметь метод print,
// которая будет выводить форматированный вывод в консоль имени,
// фамилии и возраста. 
// Пример:
// const user = new User('John', 'Smith', 30);
// user.print();
// » Name: John, last name: Smith, age: 30.

// function User(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     this.print = () => {
//         console.log(`${this.firstname} ${this.lastname}: ${this.age}`);
//     }
// }

// let user = new User('ab', 'ba', 12);

// user.print();
// user.firstname = 'abababa';
// user.print();