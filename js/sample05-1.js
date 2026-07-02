
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

