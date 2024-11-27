//  Local storage

//Local Storage, tarayıcıda veri saklamak için kullanılan bir API'dir.
//Local Storage'a veri eklemek için setItem() metodu kullanılır.
//Local Storage'dan veri almak için getItem() metodu kullanılır.
//Local Storage'den veri silmek için removeItem() metodu kullanılır.
//Local Storage'daki tüm verileri silmek için clear() metodu kullanılır.
//Local Storage'daki verileri görmek için console'da localStorage yazılabilir.
//Local Storage'da veri saklamak için sadece string veri tipi kullanılabilir.
//Local Storage'da veri saklamak için JSON.stringify() ve JSON.parse() metotları kullanılabilir.

// Local Storage'a veri eklemek
// let userName = "Furkancan";
// localStorage.setItem("name", userName);

// //Local Storage'dan veri almak
// let name = localStorage.getItem("name");
// console.log(name);

// let yas = 24;
// localStorage.setItem("age", yas);
// let age =localStorage.getItem("age");
// console.log(age);
// console.log(typeof age);

// let user = {
//     name: "Furkancan",
//     age: 24,
//     city: "Trabzon",
//     lang: ["Java", "Python", "Javascript"],
// };
// localStorage.setItem("userDetail", JSON.stringify(user));

// let userDetail = JSON.parse(localStorage.getItem("userDetail"));

// console.log(userDetail);

// let users = [
//     {name: "Furkancan", age: 24},
//     {name: "Azra", age: 21},
//     {name: "Cinar", age: 12},
// ];

// sessionStorage.setItem("users", JSON.stringify(users));

// let usersDetail = JSON.parse(sessionStorage.getItem("users"));

// usersDetail.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// let filteredUsers = usersDetail.filter((user) => user.age < 25);
// filteredUsers.map((user) => {
//     document.write(`<p>${user.name} - ${user.age}</p>`);
// });

// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];
// let langs = ["Python", "Java", "C++", "Javascript"];

// const result = numbers.reduce((toplam, number) => {
//     return toplam + number;

// } , 0);
// console.log(result);

// const result = [...langs, ...numbers]
// langs = [...langs, "C#"];
// console.log(langs);


//DESTRUCTING ASSIGNMENT
// let user = {
//     name: "Furkancan",
//     age: 24,
//     city: "Trabzon",
//     lang: ["Java", "Python", "Javascript"],
//     };

//     let {name, ...geriKalanlar } = user;

//     console.log( name, geriKalanlar);


