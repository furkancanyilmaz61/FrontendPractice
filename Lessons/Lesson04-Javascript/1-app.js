//JS Giris 

//console.log("Merhaba JS");

//DEGISKENLER NUMBER
// var a=10;//Number
// var b=3.14;//Number
// var c="Javascript"; //String

//console.log(a);
//console.log(typeof a);

//console.log(a,b,c);

//OTOMATIK TIP DONUSUMLERI

//var firstNumber=10;
//var secondNumber="20";
//var result = firstNumber - secondNumber;
//var result =firstNumber + secondNumber
//console.log(typeof result);
//console.log(result);

//hoisting!!! ONEMLI
//var firstNumber;
//console.log(firstNumber);
//firstNumber = 20;
//deneme();
//function deneme() {
//   console.log("a fonksiyonu");
//}

//BOOLEAN (true, false)!!! ONEMLI
// var isActive = true;
//if (age){
 //   age >= 18 ? console.log("Ehliyet alabilir") : console.log("Ehliyet alamaz");
//}

//UNDEFINED - TANIMSIZ
//var userName;
//console.log(userName);
//console.log(typeof userName);

//NULL - DEGER YOK
//var isNull = null;
//console.log(isNull);
//console.log(typeof isNull);

//OBJECT - Nesne!!!! ONEMLI
// var user = {
// name: "Varol",
// age: 30,
// isActive: true,
// notlar: {
//     mat: 80,
//     fizik: 90
// },
// favoriteFruits: ["elma", "armut"],
// };
// console.log(user);
// console.log(user.name);
// console.log(user.notlar.mat);
// console.log(typeof user);

//ARRAY  -  DIZI !!! ONEMLI
// var fruits = ["elma", "armut", "karpuz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

//FUNCTION - FONKSIYON 
// function hello() {
//     console.log("Merhaba Javascript");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

//DATE - TARIH
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = [10];
// var b = a;
// console.log("1-", a, b);
// a = [20];
// console.log("2-", a, b);
// console.log("3-", a * b);

// var a =[10, 20, 30, 40, 50];
// var b = a;
// console.log("1-", a, b);
// // a[0] = 60;
// a.push(60); // bunda sadece sona ekliyor diger ust satirdaknde ise basa
// console.log("2-", a, b);


//SCOPE-KAPSAM
// var a = 10; //GLOBAL SCOPE
// function scope() {
// var b = 20; //FUNCTION SCOPE
// console.log(a, b);
// }
// scope();
// if (true) {
// let c = 30; //BLOCK SCOPE
// }
// {
// let d = 40; //block scope
// }
// console.log(a, b, c, d);

//TIP DONUSUMLERI 
// var a = 5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var a = "5";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = "deneme";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a); // NaN - Not a Number olmasina ragmen numbera donusecektir.

// var a = 5 + "2";
// console.log(a, typeof a); // 52 -sayilari birlestirecektir

// var a = 5 - "2";
// console.log(a, typeof a); // toplama islemi yapacaktir

//OPERATORLER - OPERATORS
//Atama Operatoru - Assignment Operator (=)
// const a = 10; //let var gibi sonra degistirilebilir. const ise degistirilemez. sabit degerler icin kullanilir. COK COK COK ONEMLI!!!!!

// //Arithmetic Operators - Matematiksel Operatorler
// console.log(10 + 5);// toplama 
// console.log(10 - 5);// cikarma   
// console.log(10 * 5);// Carpma
// console.log(10 / 5);//Bolme
// console.log(10 % 5);//Mod Alma kalani hesaplar.
// console.log(10 ** 5);//Us Alma 10 uzeri 5
let value;
// // //COMPARISION OPERATORLERI KARSILASTIRMA OPERATORLERI
// a = 10;
// b = 20;
// c = "10";
// d = 10;
// value = a == c; // Esit mi?
// value = a ===c; // Tip ve deger esit mi?
// value = a != b; // Esit degil mi?
// value = a !== c; // Tip ve deger esit degil mi?
// value = a > b; // Buyuk mu?
// value = a < b; // Kucuk mu?
// value = a >= b; // Buyuk esit mi?
// value = a <= b; // Kucuk esit mi?

// // && (And) Operatörü
// value = a == d && a < b;

// // || (Or) Operatörü
// value = a == b || b < a;// ikiside yanlis diye false biri dogru olsa true olurdu.


// console.log(10 == 5); // Esitlik
// console.log(10 != 5); // Esit degil
// console.log(10 > 5); // Buyuk

// MATH FONKSIYONLARI
// let sonuc;
// sonuc = Math.round(3.6); // sayi yuvarlar
// sonuc = Math.ceil(3.2); // sayiyi yukari yuvarlar
// sonuc = Math.floor(3.9); // sayiyi asagi yuvarlar
// sonuc = Math.sqrt(16); // karekok alma
// sonuc = Math.random()* 100 ;// 0 ile 1 arasinda bir sayi verir carpi 100 yapinca 1 ile 100 arasi verir.
// sonuc = Math.floor(Math.random() * 100);// kusuratsiz icin boyle yapmamiz lazim.

// sonuc = Math.PI;

// console.log(sonuc);

//STRING METHODLARI ONEMLI ****

// const firstName = "Furkancan";
// const lastName = "Yilmaz";
// const department = "Yazilim";
// const age = 24;

// value = firstName + " " + lastName;// tirnaklar olmasa bosluksuz birlestiriyor.
// value = firstName;
// value += " " + lastName;// arti esittir value arti bosluk diye geciyor. valueda name ve lastname yi birlestiriyor.
// value = firstName.length; // value kac karakter oldugunu veriyor. firstname yani Furkancan 9 harf
// value = firstName.toUpperCase(); // buyuk harfe ceviriyor
// value = firstName.toLowerCase(); // kucuk harfe ceviriyor
// value = firstName[0]; // ilk harfi veriyor
// value = firstName[firstName.length - 1]; // son harfi veriyor
// value = firstName.indexOf("k"); // k harfinin indexini veriyor 3. indexte yani4 . sira 0 123 diye gidiyor
// value = firstName.includes("k"); // k harfi var mi diye soruyor
// value = firstName.concat(" ", lastName, " - ", "Yazilim"); // birlestiriyor.
// value = "Isim: " +
// firstName +  "" 
// + " \nSoyisim: " 
// + lastName 
// + " \nDepartman: " 
// +department 
// + " \nYas: " 
// + age;
// //Template Literals
// value = `Isim: ${firstName}
// Soyisim: ${lastName}
// Departman: ${department}
// Yas: ${age}`;

// value = `
// <ul>
//     <li>Isim: ${firstName}</li>
//     <li>Soyisim: ${lastName}</li>
//     <li>Departman: ${department}</li>
//     <li>Yas: ${age}</li>
// </ul>
// `;

//ARRAY METHODLARI
// const langs = ["Python", "Java", "C++", "Javascript"];
// const numbers= [43, 22, 35, 4, 12, 80, 50, 8, 99];

// value = numbers.length; // eleman sayisini veriyor
// value = numbers[0]; // ilk elemani veriyor
// value = numbers[numbers.length - 1]; // son elemani veriyor
// value = numbers.indexOf(12); // 22 sayisinin indexini veriyor
// value = numbers.includes(12); // 22 sayisi var mi diye soruyor
// value = numbers.push(100); // 100 sayisini sona ekliyor
// value = numbers.unshift(200); // 200 sayisini basa ekliyor
// value = numbers.pop(); // son elemani siliyor
// value = numbers.shift(); // ilk elemani siliyor
// value = numbers.reverse(); // sirayi tersine ceviriyor
// value = numbers.sort(); // siralama yapiyor
// value = numbers.sort().reverse(); // siralama yapiyor ve tersine ceviriyor
// value = numbers.sort(function(a, b) {
// return a - b;
// }); //KUCUKTEN BUYUGE SIRALAMA


// console.log(numbers);

//OBJECT METHODLARI
// const student = {
// fullName: "Furkancan Yilmaz",
// age:24,
// adres: {
//     city:"Istanbul",
//     country:"Turkiye" ,  
// },
// langs: ["Python", "Java", "C++", "Javascript"],
// work: function() {
//     console.log("Calisiyor...");
// },  
// };

// value = student;
// value = student.fullName;
// value = student.adres.city;
// value = student.langs[0];
// value = student.work();//herhangi bir seyi return etmedigi icin undefined yaziyor.

// let date = new Date();
// value = date;
// value = date.getMonth() + 1;// AY
// value = date.getDate(); // GUN
// value = date.getFullYear(); // YIL
// value = date.getDay(); // Haftanin gunu pazar index oolarak 0 dir.
// value = date.getHours(); // SAAT
// value = date.getMinutes(); // DAKIKA
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; //Tarih

//KOSULLAR - CONDITIONS
// let a = 10;
// let b = 20;

// if (a > b) {
//     value = `${a} buyuktur ${b}`;
// } else if (a == b) {
//     value = `${a} esittir ${b}`;
// } else {
//     value = `${a} kucuktur ${b}`;
// }

// const islem = 5;
// switch (islem) {
    
//     case 1:
//         value = "Islem 1";
//         break;
//         case 2:
//         value = "Islem 2";
//         break;
//         case 3:
//         value = "Islem 3";
//         break;
//         case 4:
//         value = "Islem 4";
//         break;
//         default:
//         value = "Gecersiz islem";
//         break;
// }

//DONGULER - LOOPS ONEMLI *****
//FOR DONGUSU
// for (let i = 0; i < 10; i++) {  //i 10 dan kucuk olana kadar artiyor. i ++ ise her zaman sayiyi bir arttiriyor.
//     if (i == 3) {
//         break;// break oldugu icin 3 u gorunce duruyor.
//         //continue;
//     }
//     console.log(i); //3 e gelene kadar yaziyor continue gelince birdaha dongu olarak basa geliyor.
// }
// const langs = ["Python", "Java", "C++", "Javascript"];
// for (let i = 0; i < langs.length; i++) {
//     console.log(langs[i]);
// }

//FUNCTIONS - FONKSIYONLAR
// function merhaba() {
//     console.log("Merhaba");
// }
// merhaba();

// function merhaba() {
//     return"Merhaba";
// }
// console.log(merhaba());

// function user(name, age) {
//     console.log(`Isim: ${name} Yas: ${age}`);
// }
// user("Furkancan", 24);//yasi vermezsek undefined yazar

// function user(name="Bilgi Yok", age="Bilgi Yok") {
//     console.log(`Isim: ${name} Yas: ${age}`);
// }
// user("Furkancan");


//return function
// function suqare(x){
// return x * x;
// }
// const result = suqare(5) * 3; // 5 in karesi carpi 3 demek.
// console.log(result);

//ARROW FUNCTION 

// const square = (x) => x * x;
// return x * x;
//}
// const square = (x) => x * x;
// console.log(square(5));

//WHILE DONGUSU 

// let i = 0;
// while(i < 10) {
    
//     console.log(i);
//     i++;
// }

// while(i < 10) {
//     if (i == 3) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//DO WHILE DONGUSU
// do{
//     console.log(i);
//     i++;
// }while(i < 10);

//forEach DONGUSU
//  const langs = ["Python", "Java", "C++", "Javascript"];
//  langs.forEach(function(lang, index) {
//     console.log(lang, index);
// });

//MAP DONGUSU
// langs.map(function(lang, index) {
//     console.log(lang, index);
// });




