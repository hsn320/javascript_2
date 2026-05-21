// kadai02.js

const todo = document.querySelector(".todo");
const todoItemWrap = todo.querySelector("tbody");

const todoInputTxtField = document.querySelector("[name=comment]");
const todoItemEntryBtn = document.querySelector("[type=submit]");

// submit click event
todoItemEntryBtn.addEventListener("click", (e) =>{
    // タグが持つデフォルトの挙動を止める
    e.preventDefault();

    const text = todoInputTxtField.value;

    todoItemWrap.insertAdjacentHTML("beforeend", 
        `<tr>
            <td class="comment">${ text }</td>
            <td class="control"><button class="remove">削除</button></td>
        </tr> `
    );
});

todoItemWrap.addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("remove")) {
        return;
    }
    target.closest("tr").remove();
});
