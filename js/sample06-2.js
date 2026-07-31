
const todo = document.querySelector(".📝");
const modal = document.querySelector(".🪟");

const createConfirm = (modal) => {
    const messageWrap = modal.querySelector(".🪟__💬");
    const okButton = modal.querySelector(".🪟__🔘--✅")
    const cancelButton = modal.querySelector(".🪟__🔘--❌");
    
    
    const show = (message = "") => {
        messageWrap.textContent = message;
        modal.showModal();
        return new Promise((resolve) => {
            // ダイアログのOKボタンをクリック
            okButton.addEventListener("click", () => {
                modal.close();
                resolve(true);
            },{ once: true });
            // モーダルのキャンセルボタンをクリック
            cancelButton.addEventListener("click", () => {
                modal.close();
                resolve(false);
            });
        });
    }
    return { show };
}

const confirm = createConfirm(modal);

todo.addEventListener("click", async (e) => {
    const element = e.target;
    if(
        element.classList.contains("📝__🗑️") ||
        element.classList.contains("material-symbols-outlined")
    ){
        const todoItemWrap = element.closest(".📝__📄")
        if(! await confirm.show("このアイテムを削除しますか？")){
            return;
        }
        todoItemWrap.classList.add("📝--👻");

        todoItemWrap.addEventListener("transitionend",(e) => {
            console.log(e);
            if(e.propertyName === "opacity") {
                todoItemWrap.remove();
            }
        })
    }
});











