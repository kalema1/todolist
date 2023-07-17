/* const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (inputBox.value === ''){
        alert("You must add a Task");
    }
    else {
        let li = document.createElement('li');
        li.innerHtml = inputBox.value;
        listContainer.appendChild(li);
    }
} */

let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');
let addButton = document.querySelector('button');
/* let li = document.querySelector('li'); */

// creating a new task

function createNewTask(){
    let input = inputBox.value;
    let listElement = document.createElement('li');
    listElement.innerHTML = input;
    return listElement;
}

// create span cross
function createSpanCross() {
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    return span.innerHTML;
}

// add task


function addTask() {
    if (inputBox.value === ''){
        alert("You must add a Task");
    }
    else {
        let newTask = createNewTask();
        let newSpan = createSpanCross();
        let listElement = document.createElement('li');

        listContainer.appendChild(newTask);
        /*listElement.appendChild(newSpan); */
    }
    inputBox.value = '';
    saveData();
}

//add a click event listener
addButton.addEventListener('click', () => {
    saveData();
    addTask();
})

function saveData() {
    // capture the data
    let data = inputBox.value;
    let list = [data];
    let myRawToDos = localStorage.getItem('to-dos');

    if (myRawToDos !== null) {
        let myToDos = JSON.parse(myRawToDos);
        myToDos.push(data);
        localStorage.setItem('to-dos', JSON.stringify(myToDos));
    }
    else {
        localStorage.setItem('to-dos', JSON.stringify(list));
    }
}


//adding tasks from local storage

let myTaskFromLocalStorage = JSON.parse(localStorage.getItem('to-dos'));
let listElements = myTaskFromLocalStorage.map((data) => {
    //create li element
    let listElement = document.createElement('li');
    // add the current input value to li
    listElement.innerText = data;
    return listElement;
})
listContainer.append(...listElements);


// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



