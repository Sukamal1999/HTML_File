var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e){
    e.preventDefault();
    // Get Input Value
    var newItem = document.getElementById('item');

    //create new li element
    var li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create  delete button
    var deleteBtn = document.createElement('button');
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-smfloat-right delete';
    //Append text ndoe
    deleteBtn.append(document.createTextNode('X'));
    //Append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

//filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get li s
   var items = itemList.getElementsByTagName('li');
   //Convert to an array
   Array.form(items).forEach(function(item){
    var itemName = item.firstchild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }
    else{
        item.style.display = 'none';
    }
    });
   }
