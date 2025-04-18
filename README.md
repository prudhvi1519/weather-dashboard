# 🌦️ Weather Dashboard
A simple and interactive weather dashboard application built with Django and JavaScript. The app allows users to view real-time weather data based on their city or current location, utilizing the OpenWeatherMap API.

---

## ✨ Features
- **Current Location Weather:** Automatically detects and displays the weather based on the user's current location.
- **City Search:** Allows users to search and view the weather of any city worldwide.
- **Weather Icons:** Displays weather icons based on the current weather conditions.
- **Django Backend:** The application is powered by Django to serve the front-end and handle any back-end logic.

---

## 🛠️ Technologies Used
- **Django:** A Python web framework to build the back-end and serve static files.
- **HTML:** For creating the structure of the web page.
- **CSS:** For styling the dashboard and making it responsive.
- **JavaScript:** To handle API requests, DOM manipulations, and interactive features.
- **OpenWeatherMap API:** Provides weather data such as temperature, humidity, wind speed, and more.

---

## 🔑 API Used
**OpenWeatherMap API:** Provides real-time weather data and forecasts.

---

## ⚙️ How to Run Locally

- Clone the repository:
- git clone https://github.com/prudhvi1519/weather-dashboard.git
  - Navigate to the project directory:

- cd weather-dashboard
  - Install the required dependencies:


- pip install -r requirements.txt
  - Run the Django development server:

- python manage.py runserver
  - Open the browser and go to http://127.0.0.1:8000 to view the application.

---

## 🔑 Setup API Key
To use the weather API, you'll need to replace the placeholder API key in the JavaScript file with your own OpenWeatherMap API key. Here's how:

Go to OpenWeatherMap and sign up for an API key.

In the static/js/script.js file, replace the following line with your API key:

javascript

const apiKey = 'YOUR_API_KEY';

---

## 🤝 Contribution
Feel free to fork this repository, create a pull request, or contribute to the project with new features or improvements.

---

## 📜 License
This project is open-source and available under the MIT License.
