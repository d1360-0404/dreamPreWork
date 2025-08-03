import { fetchDataName, fetchDataID } from "./fetchdData";
import { displayCard } from "./displayCard";
const characterContainer=document.getElementById("character-container");

const input=document.getElementById("input");
//const submit=document.getElementById("submit");
const randomButton=document.getElementById("randomBTN");

const tempHeros=[
  {name:"Spider-Man",ID:620},
  {name:"Blue Beetle III",ID:126},
  {name:"Hulk",ID:332},
  {name:"Ironman",ID:732},
  {name:"Deadpool",ID:213},
  {name:"Black Panther",ID:106},
  {name:"Wolverine",ID:717},
  {name:"Captain America",ID:149},
]

randomButton.addEventListener("click",async ()=>{
    const randomNumber=Math.floor(Math.random()*731)+1;
    characterContainer.innerHTML = "";

    const tempHero =await fetchDataID(randomNumber);
    displayCard(tempHero,characterContainer);
});

input.addEventListener("input",async e=>{
  characterContainer.innerHTML = "";
  const value=e.target.value.toLowerCase();

  if(value.length===0){
    showTempHeros();
  } 
  if (value === "") return;

  const characters=await fetchDataName(value);
  characters.results.forEach(element => {
    if(element.name.toLowerCase().startsWith(value)){
      displayCard(element,characterContainer);
    }
  });

});

function showTempHeros(){
  tempHeros.forEach(async (hero)=>{
    const tempHero=await fetchDataID(hero.ID);
    displayCard(tempHero,characterContainer);
  
  });
}
showTempHeros();

document.getElementById("character-container").addEventListener("click", (e) => {
  const card = e.target.closest(".profile-container");
  if (card) {
    window.location.href = `/character-page.html?id=${card.dataset.id}`;
  }
});

async function displayCharacter(heroID){
 chosenHero=await fetchDataID(heroID);
}