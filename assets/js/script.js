"use strickt";

let inp=document.getElementById('inp');
let btn=document.getElementById('btn');
let list=document.getElementById('list');

let todo=[];

function add(){

    if(inp.value==' '  || todo.find(inp.value)){

        alert('Bu deyer daxil edile bilmez!');
    }
    else{
        todo.push(inp.value);
        inp.value='';
    }

    let data='';

    for(let item in todo){

        if(item!=inp.value)
        data+=`<li class="list-group-item"> ${todo[item]} </li>`;
    }


    list.innerHTML=data;
}

btn.addEventListener('click',add)