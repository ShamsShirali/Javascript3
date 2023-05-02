"use strict";

let inp = document.getElementById('inp');
let form = document.getElementById('form');
let list = document.getElementById('list');
// document.addEventListener("DOMContentLoaded", localGet);

function add(e) {
  e.preventDefault();
  Display(inp.value);
  localAdd();
  inp.value = "";
}

function localAdd() {
  let todo;

  if (localStorage.getItem("todo") === null) {
    todo = [];
  }
  else {
    todo = JSON.parse(localStorage.getItem("todo"));
  }

  todo.push(inp.value);
  localStorage.setItem("todo", JSON.stringify(todo));
}

function localGet() {
  let todo = JSON.parse(localStorage.getItem("todo"));

  todo.forEach(item => {
    Display(item);
  })
}

function Display(data) {
  let newList = document.createElement("li");

  newList.classList.add("list-group-item", "d-flex", "justify-content-between");
  newList.textContent = data;
  list.appendChild(newList);

  let newBtn = document.createElement("button");

  newBtn.classList.add("btn", "btn-danger", "btn-sm");
  newBtn.textContent = "Delete";
  newBtn.setAttribute("onclick", "Delete(this)");
  newList.appendChild(newBtn);
}

function Delete(item) {
  let text = item.parentNode.firstChild.textContent;
  let todo = JSON.parse(localStorage.getItem("todo"));
  let inde = todo.indexOf(text);

  todo.splice(inde, 1);
  localStorage.setItem("todo", JSON.stringify(todo));
  item.parentElement.remove();
}

form.addEventListener("submit", add);