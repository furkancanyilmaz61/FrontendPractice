let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts[0];
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].classList;

//ID ILE SECME 
value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerHTML;


//CLASS ILE SECME
value = document.getElementsByClassName("text");
value = document.getElementsByClassName("text")[0];

//TAG ILE SECME
value = document.getElementsByTagName("p");

//QUERY ILE SECME
value = document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelector("span");


//ELEMAN OLUSTURMA
// value = document.getElementById
/* <button id="denemeButton"> Click Me</button> */
const button = document.createElement("a");
button.id = "denemeButton";
button.className = "btn btn-danger";
button.href = "https://www.google.com";
button.target = "_blank";




console.log(value);