import { API_KADAI05 } from "./config.js";

const fetchData = await fetch(API_KADAI05, {
    method: "GET",
    headers: {},
    body: {},
    catch: "no-store",
});
const APIData = await fetchData.then

console.log(fetchData);
