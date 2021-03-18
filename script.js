//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//EventListeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    //nu mai da refresh
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //appends todoDiv to list
    todoList.appendChild(todoDiv)
    //Clear todoInput value
    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target; // retin pe ce dau click //NOTE
    //delete the task
    if (item.classList[0] === 'trash-btn') { // NOTE
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        //Remove after animation ends
        todo.addEventListener('transitionend', () => {  //NOTE
            todo.remove();

        })

    }
    //checkMark
    if (item.classList[0] === "complete-btn") {
        //cand dau click adaug o clasa de CSS si bag acolo ce vr sa se intample cand e apasat
        const todo = item.parentElement;
        todo.classList.toggle("completed"); // NOTE            
        item.classList.toggle("completed1");
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes; // NOTE    

    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
        }
    });

    // for (let i = 0; i <= todos.length; i++) {
    //     switch (event.target.value) {
    //         case "all":
    //             todos[i].style.display = "flex";
    //             break;
    //         case "completed":
    //             if (todos[i].classList.contains("completed")) {
    //                 todos[i].style.display = "flex";

    //             }
    //             else {
    //                 todos[i].style.display = "none";
    //             }
    //             break;
    //     }
    // }

}



