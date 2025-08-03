
export function displayCard(tempHero,characterContainer){
  
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