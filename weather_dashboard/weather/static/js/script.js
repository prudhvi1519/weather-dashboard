document.addEventListener('DOMContentLoaded', () => {
  // Automatically fetch current location weather on page load
  getCurrentLocationWeather();

  // Event listener for "Search" functionality
  document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
      fetchWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });

  // Event listener for "Current Location" button
  document.getElementById('current-location-button').addEventListener('click', getCurrentLocationWeather);
});

// Function to fetch weather data for a given city
function fetchWeather(city) {
  const apiKey = '8272a98d9a5305bdef2186b8de800dd2'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the API response for debugging
      if (data.cod === '404') {
        alert('City not found. Please try again.');
        return;
      }

      const weatherInfo = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cityName: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon
      };

      updateWeatherUI(weatherInfo);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Function to get the current location's weather
function getCurrentLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiKey = '8272a98d9a5305bdef2186b8de800dd2'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data); // Log the API response for debugging
          const weatherInfo = {
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            cityName: data.name,
            country: data.sys.country,
            icon: data.weather[0].icon
          };

          updateWeatherUI(weatherInfo);
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });
    }, (error) => {
      console.log("Error getting location:", error);
      alert('Unable to retrieve your location. Please allow location access in your browser.');
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

// Function to update weather info in the DOM
function updateWeatherUI(weatherInfo) {
  document.getElementById('temperature').textContent = `Temperature: ${weatherInfo.temperature} °C`;
  document.getElementById('description').textContent = `Description: ${weatherInfo.description}`;
  document.getElementById('humidity').textContent = `Humidity: ${weatherInfo.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherInfo.windSpeed} m/s`;
  document.getElementById('city-name').textContent = `${weatherInfo.cityName}, ${weatherInfo.country}`;

  // Ensure you're referencing the correct element by its id
  const iconElement = document.getElementById('weather-icon');
  if (iconElement) {
    iconElement.src = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
    iconElement.alt = weatherInfo.description;
    iconElement.style.display = 'inline';  // Make sure the icon is visible
  }
}

