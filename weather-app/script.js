const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const errorMsg = document.getElementById('errorMsg');

const API_KEY = 'YOUR_API_KEY'; // <-- REPLACE with your own API key

// Load last city from localStorage (if any)
window.onload = () => {
  const savedCity = localStorage.getItem('lastCity');
  if (savedCity) {
    cityInput.value = savedCity;
    fetchWeather(savedCity);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  weatherResult.textContent = '';
  errorMsg.textContent = '';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    weatherResult.innerHTML = `
      <strong>City:</strong> ${data.name} <br>
      <strong>Temperature:</strong> ${data.main.temp} °C <br>
      <strong>Description:</strong> ${data.weather[0].description}
    `;
    localStorage.setItem('lastCity', city); // Save city to localStorage
  } catch (error) {
    errorMsg.textContent = error.message;
  }
}
