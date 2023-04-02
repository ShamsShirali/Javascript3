"use strickt";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let list = document.getElementById('list');

let todo = [];

function listcount(){
  
  let data='';

  for (let item in todo) {
    if (item != inp.value) {
      data += `<li class="list-group-item"> ${todo[item]} </li>`;
    }
  }

    list.innerHTML = data;
}

function add() {

  if (inp.value != '' && !todo.includes(`${inp.value}`)) {
    todo.push(inp.value);
    inp.value = '';

    listcount();
  }
  else {
    alert('Bu deyer daxil edile bilmez!');
  }
}

function deleteitem() {
  for (let item in todo) {
    if (todo[item] == inp.value) {
      todo.splice(item, 1);
    }
  }

  listcount();
}

btn.addEventListener('click', add);
btn2.addEventListener('click', deleteitem);
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  add();
})