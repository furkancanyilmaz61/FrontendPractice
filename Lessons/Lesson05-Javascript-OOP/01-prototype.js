// Object Literal 
// const person1 = {
//     name: "Furkancan",
//     age: 24,
//     langs: ["Java", "Python", "Javascript"],
//     address: {
//         city: "Trabzon",
//         street: "Vakfikebir",
//     },
//     showInfos: function () {
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// }
// const person2 = {
//     name: "Cinar",
//     age: 12,
//     langs: ["Java", "Python", "Javascript"],
//     address: {
//         city: "Istanbul",
//         street: "Umraniye",
//     },
//     showInfos: function () {
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// }

// console.log(person1);
// console.log(person2);

//YAPICUI FUNCTION (CONSTRUCTOR )
function Person(name, age, langs) { // Yapici fonksiyonlarda p harfi buyuk olur.
    this.name = name;
    this.age = age;
    this.langs = langs;

//     this.showInfos = function () {
//         console.log(this.name, this.age, this.langs);
//     }
// } alttaki varken buna gerek yok
}
Person.prototype.showInfos = function () {
    console.log(this.name, this.age, this.langs);
}; // onemli

const person1 = new Person("Furkancan", 24, ["Java", "Python", "Javascript"]);
const person2 = new Person("Cinar", 12, ["Java", "Python", "Javascript"]);
console.log(person1);
console.log(person2);
person1.showInfos();
person2.showInfos();
console.log(person1.langs[0]);


