function viewInfo() {
  const city = document.getElementById("cityInput").value;

  getData(city);
}

async function getData(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1`;

  const weatherResult = document.getElementById("weatherResult");

  const data = await fetch(url);

  if (!data.ok) {
    console.log("DATA NUK U MUR ME SUKSES!");
    return;
  }

  const response = await data.json();

  const { latitude, longitude, name, country } = response.results[0];

  const urlApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

  const data2 = await fetch(urlApi);

  const response2 = await data2.json();

  console.log("RESPONSE 2:", response2);

  const temperature = response2.current.temperature_2m;
  const wind = response2.current.wind_speed_10m;

  weatherResult.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Wind Speed:</strong> ${wind} m/s</p>
    `;
}
