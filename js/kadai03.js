
// [type=submit]
const entryBtn = document.querySelector("[type=submit]");
// [name=name]
const productNameField = document.querySelector("[name=name]");
const authorNameField = document.querySelector("[name=author_name]");
const productUrlField = document.querySelector("[name=product_url]");
const videoUrlField = document.querySelector("[name=video_url]");
const productCategoryField = document.querySelector("[name=product_category]");
const descriptionField = document.querySelector("[name=description]");

// ページを訪問時

// ??(NULL合体演算子) ?? の右辺が null の場合は、?? の右辺のデータを保存する
let productName = sessionStorage.getItem( "kadai03_product_name" ) ?? "";
let authorName = sessionStorage.getItem("kadai03_author_name") ?? "";
let productUrl = sessionStorage.getItem("kadai03_product_url") ?? "";
let videoUrl = sessionStorage.getItem("kadai03_video_url") ?? "";
let productCategory = sessionStorage.getItem("kadai03_product_category") ?? "";
let description = sessionStorage.getItem("kadai03_description") ?? "";

productNameField.value = productName;
authorNameField.value = authorName;
productUrlField.value = productUrl;
videoUrlField.value = videoUrl;
productCategoryField.value = productCategory;
descriptionField.value = description;

// [type=submit] click event
entryBtn.addEventListener("click",(e) =>{
    // formのsubmit送信を停止
    e.preventDefault();

    if(productNameField.value !== ""){
        sessionStorage.setItem( "kadai03_product_name", productNameField.value);
        sessionStorage.setItem("kadai03_author_name", authorNameField.value);
        sessionStorage.setItem("kadai03_product_url", productUrlField.value);
        sessionStorage.setItem("kadai03_video_url", videoUrlField.value);
        sessionStorage.setItem("kadai03_product_category", productCategoryField.value);
        sessionStorage.setItem("kadai03_description", descriptionField.value);
    }
});