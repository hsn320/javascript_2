// kadai02.js

// const todo = document.querySelector(".todo");
// const todoItemWrap = todo.querySelector("tbody");

// const todoInputTxtField = document.querySelector("[name=comment]");
// const todoItemEntryBtn = document.querySelector("[type=submit]");

// // submit click event
// todoItemEntryBtn.addEventListener("click", (e) =>{
//     // タグが持つデフォルトの挙動を止める
//     e.preventDefault();

//     const text = todoInputTxtField.value;

//     todoItemWrap.insertAdjacentHTML("beforeend", 
//         `<tr>
//             <td class="comment">${ text }</td>
//             <td class="control"><button class="remove">削除</button></td>
//         </tr> `
//     );
// });

// todoItemWrap.addEventListener("click", (e) => {
//     const target = e.target
    
//     if (!target.classList.contains("remove")) {
//         return;
//     }
//     target.closest("tr").remove();
// });

const storageKey = "kadai04";

const todo = document.querySelector(".todo");
const todoItemWrap = todo.querySelector("tbody");

const todoInputTxtField = document.querySelector("[name=comment]");
const todoItemEntryBtn = document.querySelector("[type=submit]");

// 常に配列で扱う
let todoData = 
    JSON.parse(localStorage.getItem(storageKey)) ??
    [];

todoData.forEach((text) => {
    todoItemWrap.insertAdjacentHTML(
        "beforeend",
        `<tr>
            <td class="comment">${text}</td>
            <td class="control">
                <button class="remove">削除</button>
            </td>
        </tr>`
    );
});

// 追加
todoItemEntryBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = todoInputTxtField.value;
    todoItemWrap.insertAdjacentHTML(
        "beforeend",
        `<tr>
            <td class="comment">${text}</td>
            <td class="control">
                <button class="remove">削除</button>
            </td>
        </tr>`
    );

    let todoData = [];
    const todoItems = todoItemWrap.querySelectorAll("tr");

    todoItems.forEach((item) => {
        const text = item.querySelector(".comment").textContent;
        todoData.push(text);
    });
    localStorage.setItem(
        storageKey,
        JSON.stringify(todoData)
    );
});

// 削除
todoItemWrap.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("remove")) return;

    const row = target.closest("tr");

    row.remove();
    todoData = [];

    const todoItems = todoItemWrap.querySelectorAll("tr");
    todoItems.forEach((item) => {
        todoData.push(
            item.querySelector(".comment").textContent
        );
    });

    localStorage.setItem(
        storageKey,
        JSON.stringify(todoData)
    );

});