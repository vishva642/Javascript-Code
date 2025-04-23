const apiKey = 'd35e583a88f835f0f9c6529f9e710a3f'; // Replace with your actual API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('City not found');
      return res.json();
    })
    .then(data => {
      const weatherHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
      `;
      document.getElementById('weatherData').innerHTML = weatherHTML;
    })
    .catch(err => {
      document.getElementById('weatherData').innerHTML = '<p>Error fetching weather data</p>';
      console.error(err);
    });
}
