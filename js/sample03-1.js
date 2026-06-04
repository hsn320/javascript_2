
// セッションの取得
let data = sessionStorage.getItem("sample03-1");
console.log(data);

// セッションデータがなかった場合、メッセージを表示
if( data === null ) {
    console.log( "セッション：sample03-1はありません" );
}
else{
    console.log( `セッション：${ data }` );
}

// セッションにデータを保存
sessionStorage.setItem( "sample03-1", "2026-06-04 9:48" );


// セッションのデータを削除
const removeItemButton = document.querySelector(".btn-remove");
removeItemButton.addEventListener("click", () => {
    sessionStorage.removeItem("sample03-1");
});