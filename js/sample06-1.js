
const fileField = document.querySelector(".file");
const imageField = document.querySelector("img");

// input file change event
fileField.addEventListener("change", async () => {

    // Promiseを使わないバージョン
    // // 選択したファイルを描画する処理
    // const reader = new FileReader();
    // reader.readAsDataURL(fileField.files[0]);

    // // reader laod event
    // reader.addEventListener("load", () => {
    //     // readerで読み込んだ画像のバイナリデータ(base64)を指定
    //     imageField.src = reader.result
    // });

    // Promiseを活用したバージョン
    // const result = await new Promise((resolve, reject) =>{
        // // 選択したファイルを描画する処理
        // const reader = new FileReader();
        // reader.readAsDataURL(fileField.files[0]);
        // // reader laod event
        // reader.addEventListener("load", () => {
        //     resolve(reader.result)
        // });
    // });

    const result = await imageReader(fileField.files[0]);

    // readerで読み込んだ画像のバイナリデータ(base64)を指定
    imageField.src = result;

});


function imageReader(file){
    return new Promise((resolve,reject) =>{
        // 選択したファイルを描画する処理
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader laod event
        reader.addEventListener("load", () => { resolve(reader.result)});
        reader.addEventListener("error", (e) => reject(e));
    })
}
