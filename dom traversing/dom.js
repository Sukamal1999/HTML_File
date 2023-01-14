//TRAVERSING THE DOM

var itemList = document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
//ParentElemnt
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//Chiild_Nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].getElementsByClassName.backgroundColor = 'yellow' ;

// //First_child
// console.log(itemList.firstChild);
// //First_element_child
// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// LastElemrntChild
//First_child
// 

//next_Siblings
// console.log(itemList.nextSibling);
// //nextElementsibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.stylee.color = 'green';

//createElement

// create a div

var newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add id
newDiv.id = 'Hello1';

// Add attribute
newDiv.setAttribute('title','Hello Div');

//create test Node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontsize = '30px'
container.insertBefore(newDiv,h1);

