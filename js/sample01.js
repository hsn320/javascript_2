// sample01.js

//p
const p = document.querySelector("p");

//カスタムデータ属性へのアクセス
console.log(p.dataset.shortName)

//datasetでカスタムデータ属性を設定する
p.dataset.class= "A";

//属性の値を取得する
console.log(p.getAttribute("data-short-name"));

//属性を設定する
p.setAttribute("data-school-year", 2);
