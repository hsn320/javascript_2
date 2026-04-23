const setBtn = document.querySelectorAll(".set-btn");
const clearBtn = document.querySelector(".clear-btn");
const imgArea = document.querySelector("#img-field img");

// 画像フォルダの名前
const imageDir = "img";

// デフォルトの画像ファイル名
const defaultImagePath = imgArea.getAttribute("src");

// console.log(setBtn,clearBtn,imgArea);

for( let i = 0; i < setBtn.length; i++){
    setBtn[ i ].addEventListener("click", (event) => {
        const button = event.currentTarget;
        
        // btnタグに設定されているData属性を使って、画像パスを作る
        // 画像パスを作る
        const filePath = `${imageDir}/${button.dataset.name}.${button.dataset.ex}`;

        // imgタグのsrc属性を変更する
        // imgArea.src = filePath;
        imgArea.setAttribute("src", filePath);
    });
}

// .clear-btn click event
clearBtn.addEventListener("click",(event) => {

    // imgタグのsrc属性を変更する
    imgArea.setAttribute("src", defaultImagePath);
});