// sample02-3.js

// add-todo
const addTodoItemBtn = document.querySelector(".add-todo");
// .input-todo
const inputTodoItemText = document.querySelector(".input-todo");
// .todo
const todo = document.querySelector(".todo");

// .add-todo click event
addTodoItemBtn.addEventListener("click", () => {
    let todoItemText = inputTodoItemText.value;

    if(!todoItemText) {
        // インベントの function を中断する
        return;
    }
    
    // Todo item insert
    todo.insertAdjacentHTML("beforeend", 
        `<li>${ todoItemText}
            <button class="edit-todo">EDIT</button>
            <button class="delete-todo">DELETE</button>
        </li> `
    );

    //  .delete-todo
    const deleteTodoItemBtns = todo.querySelector("li:last-child .delete-todo");
    // .delete-todo click event
    deleteTodoItemBtns.addEventListener("click", () => {
        // クリックした .delete-todo の親liを削除
        deleteTodoItemBtns.closest("li").remove();
    });

});  // add-todo click event
