const inputNewTask = document.querySelector('#newTask');
const listTasks = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function createDeleteButton(li){
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'apagar';
    deleteBtn.setAttribute('class', 'delete');
    li.appendChild(deleteBtn);
}

function clearInput(){
    inputNewTask.value = '';
    inputNewTask.focus();
}

function addNewTask(textInput){
    const li = createLi();
    listTasks.appendChild(li);
    li.textContent = textInput;
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

function saveTasks(){
    const liTasks = listTasks.querySelectorAll('li');
    const arrayTasks = [];

    for(let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('apagar', '');
        arrayTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(arrayTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addSaveTasks(){
    const tasks = localStorage.getItem('tasks');
    const arrayTasks = JSON.parse(tasks);
    
    for(let task of arrayTasks){
        addNewTask(task);
    }
}

addSaveTasks();

document.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('btnNewTask')){
        if(!inputNewTask.value) return;
        addNewTask(inputNewTask.value);
    }

    if(element.classList.contains('delete')){
        element.parentElement.remove();
        saveTasks();
    }
})

inputNewTask.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!inputNewTask.value) return;
        addNewTask(inputNewTask.value);
    }
})
