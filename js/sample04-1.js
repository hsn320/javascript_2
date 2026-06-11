// sample04-1.js

const storageKey = "sample04";
// let storageValue = [];

// ローカルストレージの内容を取得
// if( localStorage.getItem(storageKey) ){
//     storageValue = localStorage.getItem(storageKey);
// }

let storageValue = localStorage.getItem(storageKey) ?
    localStorage.getItem(storageKey) : [];
console.log(storageValue);

// ローカルストレージに保存
const saveButton = document.querySelector(".btn-save");
saveButton.addEventListener("click", () =>{
    // localStorage.setItem(storageKey, Temporal.Now.plainDateTimeISO());
    const keyword = document.querySelector(".keyword").value;
    // keywordが未入力（空文字）でない時
    if( keyword ){
        // データ型を調べて、相互変換をする
        if(typeof storageValue === "string"){
            // JSONフォーマットから配列へ戻す
            storageValue = JSON.parse(storageValue);
        }
        storageValue.push( keyword );
        // 配列をJSONフォーマットへ変換
        storageValue = JSON.stringify(storageValue);
        localStorage.setItem(storageKey, storageValue);
    }
});

// ローカルストレージの削除
const removeButton = document.querySelector(".btn-remove");
removeButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
});


