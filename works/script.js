// todo.js

const todo = document.querySelector(".todoWrap");

const comment = document.querySelector("[name=comment]");
const SubmitBtn = document.querySelector("[type=submit]");

SubmitBtn.onclick = (e) => {
    const Txt = comment.value;

    todo.insertAdjacentHTML("beforeend",
        `
        <p>
        ${Txt}
        <button class="Delete">Delete</button>
        <button class="remove">Complete</button>
        </p>
        `
    );
};
todo.onclick = (e) => {
    const target = e.target

    if (!target.classList.contains("Delete")) {
        return;
    }
    target.closest("p").remove();
}