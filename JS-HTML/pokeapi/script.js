async function searchPoke() {
  const name = document.getElementById("pokemonInput").value;

  let pokemonCard = document.getElementById("pokemonCard");
  let pokemonImage = document.getElementById("pokemonImage");
  let pokemonName = document.getElementById("pokemonName");
  let pokemonType = document.getElementById("pokemonType");
  let pokemonAbilities = document.getElementById("pokemonAbilities");

  if (name === "") {
    alert("Name should be non-empty");
    return;
  }

  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // console.log("Request: ", request);

  if (request.ok === false) {
    alert("Error with request");
    return;
  }

  const data = await request.json();
  console.log("DATA: ", data);

  let types = ""; // "normal"

  for (let i = 0; i < data.types.length; i++) {
    // data.types[0].type.name -> normal
    types += data.types[i].type.name;
  }

  // ability1, ability2, ... , abilityN
  let ability = "";
  for (let i = 0; i < data.abilities.length; i++) {
    ability += data.abilities[i].ability.name + ",";
  }

  pokemonName.innerHTML = data.name;
  pokemonType.innerHTML = types;
  pokemonAbilities.innerHTML = ability;
  pokemonImage.src = data.sprites.front_default

  pokemonCard.style.display = "block";
}
