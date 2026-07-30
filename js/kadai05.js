import { API_KADAI05 } from "./config.js";

const fetchData = await fetch(API_KADAI05, {
    method: "GET",
    cache: "no-store",
});
const APIData = await fetchData.then

console.log(fetchData);
