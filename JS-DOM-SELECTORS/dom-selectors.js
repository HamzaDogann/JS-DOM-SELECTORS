//! -------------------- DOM SELECTORS-----------------------


//! .getElementByTagName


const tagnameselector = document.getElementsByTagName('div');
console.log(tagnameselector);



//! .getElementByName


const bynameselector = document.getElementsByName('username');
console.log(bynameselector);




//! .getElementsByClassName

const title1 = document.getElementsByClassName('title1');

 console.log(title1);




 //! .getElementsById

const idtitle = document.getElementById('title2');

function fonks(){
    idtitle.style.color="red";
    idtitle.style.backgroundColor="black";
    idtitle.title="JavaScript Merhaba!"
    idtitle.className="Adana"
}
fonks();

console.log(idtitle);



//! querySelector --> çok daha geniş kullanalım iyi bir seçici

const qselector = document.querySelector("#text2");
const qselector2 = document.querySelector(".paragraf");
const qselector3 = document.querySelector(".class1 + class2");

//? gibi birçok seçim seçeneğimiz var. 



//! querySelectorAll  

const qselectorall = document.querySelectorAll(".allclass");
const qselectorall2 = document.querySelectorAll("#private");

//? parantez içine girilen class veya id gibi değerlerin tümünü seçer
//yani .allclass classına sahip bütün elementleri seçer.


//! Attribute kullanım


const titles = document.querySelectorAll("#titlenew");
titles[2].setAttribute=('Class','ozeltext');
 



//! By Hamza Dogan