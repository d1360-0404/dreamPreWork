import { fetchDataID } from "./fetchdData";

const body=document.body;
const params = new URLSearchParams(window.location.search);
const heroId = params.get("id");

const tempHero=await fetchDataID(heroId);
console.log(tempHero);
const characterH1=document.getElementById("character");
characterH1.textContent="Character: "+tempHero.name;

const img=document.createElement("img");
img.src=`${tempHero.image.url}`;

const divContainerAppearance=document.createElement("div");
const divContainerBiography=document.createElement("div");
const divContainerConnections=document.createElement("div");
const divContainerPowerStats=document.createElement("div");
const divContainerWork=document.createElement("div");

const gender=document.createElement("p");
const race=document.createElement("p");
const height=document.createElement("p");
const weight=document.createElement("p");
const eyeColor=document.createElement("p");
const hairColor=document.createElement("p");

const fullName=document.createElement("p");
const alterEgos=document.createElement("p");
const aliases=document.createElement("p");
const placeOfBirth=document.createElement("p");
const publisher=document.createElement("p");

const occupation=document.createElement("p");
const base=document.createElement("p");

const groupAffilation=document.createElement("p");
const relatives=document.createElement("p");

const combatStat=document.createElement("p")
const durabilityStat=document.createElement("p")
const intelligenceStat=document.createElement("p")
const powerStat=document.createElement("p")
const speedStat=document.createElement("p")
const strengthStat=document.createElement("p")

gender.textContent="Gender: "+tempHero.appearance["gender"];
race.textContent="Race: "+tempHero.appearance["race"];
height.textContent="Height: "+tempHero.appearance["height"];
weight.textContent="Weight: "+tempHero.appearance["weight"];
eyeColor.textContent = "Eye Color: " + tempHero.appearance["eye-color"];
hairColor.textContent = "Hair Color: " + tempHero.appearance["hair-color"];


fullName.textContent="Full Name: "+tempHero.biography["full-name"];
alterEgos.textContent="Alter Egos: "+tempHero.biography["alter-egos"];
aliases.textContent="Aliases: "+tempHero.biography["aliases"];
placeOfBirth.textContent="Place of Birth: "+tempHero.biography["place-of-birth"];
publisher.textContent="Publisher: "+tempHero.biography["publisher"];

occupation.textContent="Occupation: "+tempHero.work["occupation"];
base.textContent="Base: "+tempHero.work["base"];

groupAffilation.textContent="Group Affilation: "+tempHero.connections["group-affiliation"];
relatives.textContent="Relatives: "+tempHero.connections["relatives"];

combatStat.textContent="Combat: "+tempHero.powerstats.combat;
durabilityStat.textContent="Durability: "+tempHero.powerstats.durability;
intelligenceStat.textContent="Intelligence: "+tempHero.powerstats.intelligence;
powerStat.textContent="Power: "+tempHero.powerstats.power;
speedStat.textContent="Speed: "+tempHero.powerstats.speed;
strengthStat.textContent="Strength: "+tempHero.powerstats.strength;

divContainerAppearance.classList.add("appearance");
divContainerBiography.classList.add("biography");
divContainerConnections.classList.add("connections");
divContainerPowerStats.classList.add("powerstats");
divContainerWork.classList.add("work");

divContainerAppearance.appendChild(gender);
divContainerAppearance.appendChild(race);
divContainerAppearance.appendChild(height);
divContainerAppearance.appendChild(weight);
divContainerAppearance.appendChild(eyeColor);
divContainerAppearance.appendChild(hairColor);

divContainerBiography.appendChild(fullName);
divContainerBiography.appendChild(alterEgos);
divContainerBiography.appendChild(aliases);
divContainerBiography.appendChild(placeOfBirth);
divContainerBiography.appendChild(publisher);

divContainerWork.appendChild(occupation);
divContainerWork.appendChild(base);

divContainerConnections.appendChild(groupAffilation)
divContainerConnections.appendChild(relatives)

divContainerPowerStats.appendChild(combatStat);
divContainerPowerStats.appendChild(durabilityStat);
divContainerPowerStats.appendChild(intelligenceStat);
divContainerPowerStats.appendChild(powerStat);
divContainerPowerStats.appendChild(speedStat);
divContainerPowerStats.appendChild(strengthStat);

body.appendChild(img);
body.appendChild(divContainerAppearance);
body.appendChild(divContainerBiography);
body.appendChild(divContainerWork);
body.appendChild(divContainerConnections);
body.appendChild(divContainerPowerStats);