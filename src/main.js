import md5 from "md5";

const apiPRIVATEKEY=import.meta.env.VITE_PRIVATE_KEY;
const apiPUBLICKEY=import.meta.env.VITE_PUBLIC_KEY;
const timeStamp=Date.now();
const hs=md5(timeStamp+apiPRIVATEKEY+apiPUBLICKEY);

const input=document.getElementById("input").textContent;
const submit=document.getElementById("submit");
const randomButton=document.getElementById("randomButton");

const tempHeros=["Spider-Man (2099)","Blue Marvel","Hulk"];


randomButton.addEventListener("click",()=>{
    randomHero();
})


async function fetchData(hero) {
  try {
    const response=await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${hero}&ts=${timeStamp}&apikey=${apiPUBLICKEY}&hash=${hs}`);
    if(!response.ok){
      throw new Error("Could not fetch data")
    }
    const rawData=await response.json();
    console.log(rawData.data["results"]);
    
    
  } catch (error) {
    console.error(error);
  }
  
}

function randomHero(){


}

tempHeros.forEach((hero)=>{
fetchData(hero);
})


// fetchData();