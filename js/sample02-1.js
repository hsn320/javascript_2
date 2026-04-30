// タグの動的な作成
let element = document.createElement("p");
console.log(element)

element.textContent = "動的に作成したタグ";
console.log(element)

// 動的に作成したタグを追加

// bodyの中に作ったタグを追加
document.body.append(element);

const insertAdjacentBox = document.querySelector(".insert");
insertAdjacentBox.style.border = "1px solid tomato";
// .insert の beforebegin
insertAdjacentBox.insertAdjacentHTML("beforebegin","<p>beforebegin</p>");
// .insert の afterbegin
insertAdjacentBox.insertAdjacentHTML("afterbegin","<p>afterbegin</p>");
// .insert の beforeend
insertAdjacentBox.insertAdjacentHTML("beforeend",
    `
    <div class="box">
        <p>afterbegin</p>
    </div>
    `);



// .insert の afterend
insertAdjacentBox.insertAdjacentHTML(
    "afterend",
    `
    <div class="box>
        <p>afterbegin</p>
    </div>
    `
);

const appendBox = document.querySelector(".append");
appendBox.append(element);

// p click event
// document.querySelectorAll("p").forEach((elem) =>{
//     elem.addEventListener("click", (e) => {
//         // e.currentTarget.remove();
//         elem.remove();
//     });
// });

// 動的に追加されるタグに対してのイベントを上位の存在に予約する
document.body.addEventListener("click", (e) =>{
    console.log("body click");
    // もしイベントを起こしたタグが p のとき
    if(e.target.tagName === "P"){
        console.log("p click");
        e.target.remove();
    }
});
