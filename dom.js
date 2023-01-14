//  console.dir(document);
// examin the document object
 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(documemnt.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';

// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

//GETELEMENTBY_ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GOODBYE';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'; 
// headerTitle.style.borderBottom = 'solid 3px #000' ;
// header.style.borderBottom = 'solid 3px #000' ;

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'Green' ; 


// for(var i=0;i<items.lenght;i++)
// {
//     items.style.backgroundColor = '#00FF00';

// }


// var li = document.getElementsByTagName('li');
// console.log(i);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'Green' ;

// for(var i=0; i<li.length;i++){
//     li[i].style.backgroundColor = '#00FF00' ;
// }

//QWERY_SELECTOR

// 

//QUERYSELECTOR_ALL

var titles = document.querySelectorAll(.'title');

console.log(titles);
titles[0].textContent = 'Hello' ;

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0 ; i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#00ff00';
    even[i].style.backgroundColor = '#ccc';
}






