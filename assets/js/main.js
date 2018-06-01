
let createTask = (text, id) => `
<div class="taskItem" id="${id}">
${text}
</div>
`

let deleteItemStorage = (e) =>{
    let obj = $(e.target);
    let id = obj[0].id;
    let task = 'task-'+id;
    obj.remove();
    localStorage.removeItem(task);
   }

let i = 0;
let id = 0;
let addTask = function(e) {
    if(e.keyCode===13){
        let node = $(e.target);
        
        let input = node[0];
        let taskText = input.value.trim();
        if(taskText===''){
            return ;
        }
        
        let newTask = $(createTask(taskText, id));
        id++;
        $('.tareas').append(newTask);


        
        
            let task = 'task-'+i;
            localStorage.setItem(task, taskText);
          i++;  
        $('.text').val('');
        $('.taskItem').on('click', deleteItemStorage);
        
    }
}

let deleteStore = () =>{
    localStorage.clear();
}



let callBackOnReady = () =>{
    $('.text').on('keypress', addTask);
    $('.bot').on('click', deleteStore);
}   



$(document).ready(callBackOnReady);