
import { SAMPLE08_URL, API_PHP1_PRODUCTS, } from "./config.js";

// 非同期通信(ajax)
// thenで処理を順番通りに繋ぐ
// const fetchSweetsData = fetch("https://click.ecc.ac.jp/ecc/huemori/php1/sample08-1.php")
//     .then((response) => { return response.json()})
//     .then((data) => {
//         console.log(data);
//     });

// awaitを使って、処理待ちを指定する
const fetchSweetsData = await fetch(SAMPLE08_URL)
    .then((response) => { return response.json()});

console.log(fetchSweetsData);

// GETでデータ送信
const getParams = "name=シェイク";
const fetchPHP1ProductsData = await fetch(`${API_PHP1_PRODUCTS}?${getParams}`)
    .then(res => res.json());

console.log(fetchPHP1ProductsData);

// .products へ liを追加する liの表示は商品名
const productArea = document.querySelector(".product");
let productListItemArea = "";

fetchPHP1ProductsData.forEach((product) => {
    productListItemArea += `<li>${product.name}</li>`;
});

productArea.insertAdjacentHTML(
    "beforeend",
    productListItemArea
);
