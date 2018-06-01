
let createTask = (text) => `
<div class="taskItem">
${text}
</div>
`


let addTask = function(e) {
    if(e.keyCode===13){
        let node = $(e.target);
        let cont = node.parent().children('div');
        //let cont = padre.children[1];
        let input = node[0];
        let taskText = input.value.trim();
        if(taskText===''){
            return ;
        }
        
        let newTask = $(createTask(taskText));
        $('.tareas').append(newTask);
        
        

        localStorage.setItem('clave', taskText);
        $('.text').val('');
        
    }
}

let deleteStore = () =>{
    localStorage.clear();
}


let callBackOnReady = () =>{
    $('.text').on('keypress', addTask);
    $('.bot').on('click', deleteStore)
}   



$(document).ready(callBackOnReady);