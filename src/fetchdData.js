const AccessToken=import.meta.env.VITE_ACCESS_TOKEN;


export async function fetchDataName(name) {
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

export async function fetchDataID(heroID) {
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