import { fetchDataID } from "./fetchdData";
const params = new URLSearchParams(window.location.search);
const heroId = params.get("id");

const tempHero=fetchDataID(heroId);
console.log(tempHero);