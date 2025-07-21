const characterContainer=document.getElementById("character-container");
const AccessToken=import.meta.env.VITE_ACCESS_TOKEN;

const input=document.getElementById("input");
const submit=document.getElementById("submit");
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
    displayCard(tempHero);
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
      displayCard(element);
    }
  });

});

function showTempHeros(){
  tempHeros.forEach(async (hero)=>{
    const tempHero=await fetchDataID(hero.ID);
    displayCard(tempHero);
  
  });
}

async function fetchDataName(name) {
  try {
    const response=await fetch(`https://superheroapi.com/api.php/${AccessToken}/search/${name}`)
    if(!response.ok){
      throw new Error("Could not fetch data")
    }
    const rawData=await response.json();
    return rawData;

  } catch (error) {
    console.error(error);
  }
  
}

async function fetchDataID(heroID) {
  try {
    const response=await fetch(`https://superheroapi.com/api.php/${AccessToken}/${heroID}`)
    if(!response.ok){
      throw new Error("Could not fetch data")
    }
    const rawData=await response.json();
    return rawData;

  } catch (error) {
    console.error(error);
  }
}

function displayCard(tempHero){
  
  const profileContainer=document.createElement("div");
  profileContainer.dataset.id = tempHero.id;

  const img=document.createElement("img");
  const h2Name=document.createElement("h2");
  const divList=document.createElement("div");

  const combatStat=document.createElement("p")
  const durabilityStat=document.createElement("p")
  const intelligenceStat=document.createElement("p")
  const powerStat=document.createElement("p")
  const speedStat=document.createElement("p")
  const strengthStat=document.createElement("p")
  
  h2Name.textContent=tempHero.name;
  //come back to this 
  // when loading url if the image cant be found it returns a 404 error 
  img.src=`${tempHero.image.url}`;

  combatStat.textContent="Combat: "+tempHero.powerstats.combat;
  durabilityStat.textContent="Durability: "+tempHero.powerstats.durability;
  intelligenceStat.textContent="Intelligence: "+tempHero.powerstats.intelligence;
  powerStat.textContent="Power: "+tempHero.powerstats.power;
  speedStat.textContent="Speed: "+tempHero.powerstats.speed;
  strengthStat.textContent="Strength: "+tempHero.powerstats.strength;

  profileContainer.classList.add("profile-container");
  img.classList.add("profile-container-img");
  h2Name.classList.add("profile-container-h2");
  divList.classList.add("profile-list");
 
  combatStat.classList.add("profile-list-p");
  durabilityStat.classList.add("profile-list-p");
  intelligenceStat.classList.add("profile-list-p");
  powerStat.classList.add("profile-list-p");
  speedStat.classList.add("profile-list-p");
  strengthStat.classList.add("profile-list-p");

  profileContainer.appendChild(img);
  profileContainer.appendChild(h2Name);

  divList.appendChild(combatStat);
  divList.appendChild(durabilityStat);
  divList.appendChild(intelligenceStat);
  divList.appendChild(powerStat);
  divList.appendChild(speedStat);
  divList.appendChild(strengthStat);

  profileContainer.appendChild(divList);

  characterContainer.appendChild(profileContainer);
}

showTempHeros();

document.getElementById("character-container").addEventListener("click", (e) => {
  const card = e.target.closest(".profile-container");
  if (card) {
    console.log(card.dataset.id);
  }
});
