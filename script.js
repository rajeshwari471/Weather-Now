async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "b3f95f80cd361c885f7c59ed5220cf56"; // replace this with your key
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerText = "⚠️ Please enter a city name!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <h3>🌡️ ${data.main.temp}°C</h3>
      `;
    } else {
      resultDiv.innerText = "❌ City not found. Try again!";
    }
  } catch (error) {
    resultDiv.innerText = "⚠️ Error fetching data. Please try again.";
    console.error(error);
  }
}
async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "YOUR_REAL_API_KEY"; // replace this with your key
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerText = "⚠️ Please enter a city name!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <h3>🌡️ ${data.main.temp}°C</h3>
      `;
    } else {
      resultDiv.innerText = "❌ City not found. Try again!";
    }
  } catch (error) {
    resultDiv.innerText = "⚠️ Error fetching data. Please try again.";
    console.error(error);
  }
}
async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "YOUR_REAL_API_KEY"; // replace this with your key
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerText = "⚠️ Please enter a city name!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <h3>🌡️ ${data.main.temp}°C</h3>
      `;
    } else {
      resultDiv.innerText = "❌ City not found. Try again!";
    }
  } catch (error) {
    resultDiv.innerText = "⚠️ Error fetching data. Please try again.";
    console.error(error);
  }
}
