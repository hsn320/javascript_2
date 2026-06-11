
// [type=submit]
const entryBtn = document.querySelector("[type=submit]");
// [name=name]
const productNameField = document.querySelector("[name=name");

// ページを訪問時

// ??(NULL合体演算子) ?? の右辺が null の場合は、?? の右辺のデータを保存する
let productName = sessionStorage.getItem( "kadai03_product_name" ) ?? "";

// [type=submit] click event
entryBtn.addEventListener("click",(e) =>{
    // formのsubmit送信を停止
    e.preventDefault();
    if(productNameField.value !== ""){
        sessionStorage.setItem( "kadai03_product_name", productNameField.value );
    }
});