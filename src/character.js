import { fetchDataID } from "./fetchdData";

const characterInfo=document.getElementById("characterInfo");
const params = new URLSearchParams(window.location.search);
const heroId = params.get("id");

const tempHero=await fetchDataID(heroId);
console.log(tempHero);
const characterH1=document.getElementById("character");
characterH1.textContent="Character: "+tempHero.name;

const img=document.getElementById("img");
img.src=`${tempHero.image.url}`;

const informationDiv=document.getElementById("informationDiv");
const selected=document.getElementById("selected");

function showAppearance(){
  characterInfo.innerHTML = "";
  const divContainerAppearance=document.createElement("div");

  const gender=document.createElement("p");
  const race=document.createElement("p");
  const height=document.createElement("p");
  const weight=document.createElement("p");
  const eyeColor=document.createElement("p");
  const hairColor=document.createElement("p");

  gender.textContent="Gender: "+tempHero.appearance["gender"];
  race.textContent="Race: "+tempHero.appearance["race"];
  height.textContent="Height: "+tempHero.appearance["height"];
  weight.textContent="Weight: "+tempHero.appearance["weight"];
  eyeColor.textContent = "Eye Color: " + tempHero.appearance["eye-color"];
  hairColor.textContent = "Hair Color: " + tempHero.appearance["hair-color"];

  divContainerAppearance.classList.add("appearance");

  divContainerAppearance.appendChild(gender);
  divContainerAppearance.appendChild(race);
  divContainerAppearance.appendChild(height);
  divContainerAppearance.appendChild(weight);
  divContainerAppearance.appendChild(eyeColor);
  divContainerAppearance.appendChild(hairColor);

  selected.textContent="Appearence";
  characterInfo.appendChild(divContainerAppearance);
  informationDiv.style.backgroundColor=" #C21807";

}
function showBiography(){
  characterInfo.innerHTML = "";
  const divContainerBiography=document.createElement("div");

  const fullName=document.createElement("p");
  const alterEgos=document.createElement("p");
  const aliases=document.createElement("p");
  const placeOfBirth=document.createElement("p");
  const publisher=document.createElement("p");

  fullName.textContent="Full Name: "+tempHero.biography["full-name"];
  alterEgos.textContent="Alter Egos: "+tempHero.biography["alter-egos"];
  aliases.textContent="Aliases: "+tempHero.biography["aliases"];
  placeOfBirth.textContent="Place of Birth: "+tempHero.biography["place-of-birth"];
  publisher.textContent="Publisher: "+tempHero.biography["publisher"];

  divContainerBiography.classList.add("biography");

  divContainerBiography.appendChild(fullName);
  divContainerBiography.appendChild(alterEgos);
  divContainerBiography.appendChild(aliases);
  divContainerBiography.appendChild(placeOfBirth);
  divContainerBiography.appendChild(publisher);

  selected.textContent="Biography";
  characterInfo.appendChild(divContainerBiography);
  informationDiv.style.backgroundColor="#EBBE4D";

}
function showWork(){
  characterInfo.innerHTML = "";
  const divContainerWork=document.createElement("div");

  const groupAffilation=document.createElement("p");
  const relatives=document.createElement("p");

  groupAffilation.textContent="Group Affilation: "+tempHero.connections["group-affiliation"];
  relatives.textContent="Relatives: "+tempHero.connections["relatives"];
  
  divContainerWork.classList.add("work");

  divContainerWork.appendChild(groupAffilation);
  divContainerWork.appendChild(relatives);

  selected.textContent="Work";
  characterInfo.appendChild(divContainerWork);
  informationDiv.style.backgroundColor=" #4c69f6";

}

function showConnections(){
  characterInfo.innerHTML = "";
  const divContainerConnections=document.createElement("div");
 
  const occupation=document.createElement("p");
  const base=document.createElement("p");

  occupation.textContent="Occupation: "+tempHero.work["occupation"];
  base.textContent="Base: "+tempHero.work["base"];

  divContainerConnections.classList.add("connections");

  divContainerConnections.appendChild(occupation);
  divContainerConnections.appendChild(base);

  selected.textContent="Connections";
  characterInfo.appendChild(divContainerConnections);
  informationDiv.style.backgroundColor=" #88BE19";

}

function showPowerstats(){
  characterInfo.innerHTML = "";
  const divContainerPowerStats=document.createElement("div");
  
  const combatStat=document.createElement("p")
  const durabilityStat=document.createElement("p")
  const intelligenceStat=document.createElement("p")
  const powerStat=document.createElement("p")
  const speedStat=document.createElement("p")
  const strengthStat=document.createElement("p")

  combatStat.textContent="Combat: "+tempHero.powerstats.combat;
  durabilityStat.textContent="Durability: "+tempHero.powerstats.durability;
  intelligenceStat.textContent="Intelligence: "+tempHero.powerstats.intelligence;
  powerStat.textContent="Power: "+tempHero.powerstats.power;
  speedStat.textContent="Speed: "+tempHero.powerstats.speed;
  strengthStat.textContent="Strength: "+tempHero.powerstats.strength;

  divContainerPowerStats.classList.add("powerstats");

  divContainerPowerStats.appendChild(combatStat);
  divContainerPowerStats.appendChild(durabilityStat);
  divContainerPowerStats.appendChild(intelligenceStat);
  divContainerPowerStats.appendChild(powerStat);
  divContainerPowerStats.appendChild(speedStat);
  divContainerPowerStats.appendChild(strengthStat);

  selected.textContent="Powerstats";
  characterInfo.appendChild(divContainerPowerStats);
  informationDiv.style.backgroundColor="#5F2872";

}

window.showAppearance = showAppearance;
window.showBiography = showBiography;
window.showWork = showWork;
window.showConnections = showConnections;
window.showPowerstats = showPowerstats;

showAppearance();
