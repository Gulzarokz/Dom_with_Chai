// console.log(window);
// console.log(document);
// console.log(document.body);
// console.log(document.baseURI);
// console.log(document.head);

// // getElements

// const elements = document.getElementById('gul').innerHTML = "<h1>Self learing</h1>";
// console.log(elements);



// const element = document.getElementById("title");
// console.log(element);


// const element = document.getElementById("title").id;
// console.log(element);

// const element = document.getElementById("title").class;
// console.log(element);

// const element = document.getElementById("title").getAttribute('id');
// console.log(element);

// const element = document.getElementById("title").getAttribute('gul');
// console.log(element);


//get Attributes
// const element = document.getElementById('title').getAttribute('class')
// console.log(element);

//set Attributes
// const element = document.getElementById('title').setAttribute('class','myTeam')
// console.log(element);

// const element = document.getElementById('title').style.background = 'blue';

// how to get innerHtml innerText and innerContent
// const element = document.getElementById('title').innerHTML;
// console.log(element);

// const element = document.getElementById('title').innerText;

// // const element = document.getElementById('title').textContent; it will used to show in text with in heading like text in span 
// console.log(element);

// get element by class name 
// const element = document.getElementsByClassName('gul');
// console.log(element);


//querry selector and querry selector All
// const element = document.querySelector('h3');
// console.log(element);

// const element = document.querySelector('#title');
// console.log(element);

// const myUl = document.querySelector('ul');
// console.log(myUl);

// Relations ship in dom

const parent = document.querySelector('.parent');
// console.log(parent);
// // console.log(parent.children[2].innerHTML);
// console.log(parent.children[0].innerText);

// for (let i = 0; i < parent.children.length; i++) {
//    console.log( parent.children[i].innerHTML);
   
    
// // }
// parent.children[1].style.color = "yellow";
// // console.log(parent.firstElementChild);
// // console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.third');
// // console.log(dayOne);
// // console.log(dayOne.parentElement);
// // console.log(dayOne.nextElementSibling);
// // console.log(dayOne.previousElementSibling);

// console.log("NODES", parent.childNodes);

// CreateElement throught javaScript

// const prar = document.createElement('prar');
// console.log(prar);
// prar.className = "main";
// // prar.id = Math.round(Math.random() * 10 + 1);
// prar.id = "myId";
// prar.setAttribute("title", "generated title");
// prar.style.backgroundColor = 'blue';
// prar.padding = '5px';
// prar.innerText = "how are you";

// const addText = document.createTextNode("This is practice");
// prar.appendChild(addText);
// document.body.appendChild(prar);


function addLanguage (langName) {
   const li = document.createElement('li');
   li.innerHTML = `${langName}`
   document.querySelector('.language').appendChild(li);

}
addLanguage("python");
addLanguage("typescript");
addLanguage("java");

function addOptiLang (langName){
    const li = document.createElement('li');
    // const addText = document.createTextNode(langName);
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(li)
}
addOptiLang("php")
addOptiLang("c++")


// const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "React";



const secondLang = document.querySelector('li:nth-child(3)');
const newLi = document.createElement('li');
newLi.textContent = "MangoDB";
secondLang.replaceWith(newLi);


const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>C#</li>"

// remove 
const lastLang = document.querySelector("li:last-child")
lastLang.remove();