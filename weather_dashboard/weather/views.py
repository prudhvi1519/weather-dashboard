import requests
from django.shortcuts import render

def index(request):
    API_KEY = '8272a98d9a5305bdef2186b8de800dd2'
    
    # Check if we have city, latitude, or longitude from the form
    city = request.GET.get('city', '')
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')

    weather_data = {}

    if city:
        # If a city is provided, use it
        url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}'
        response = requests.get(url)
    elif latitude and longitude:
        # If latitude and longitude are provided, use them
        url = f'https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&units=metric&appid={API_KEY}'
        response = requests.get(url)
    else:
        # Default city (e.g., 'Visakhapatnam') if no city or location is provided
        city = 'Visakhapatnam'
        url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}'
        response = requests.get(url)

    data = response.json()

    if data.get('cod') == 200:
        weather_data = {
            'city': city,
            'temperature': data['main']['temp'],
            'description': data['weather'][0]['description'],
            'icon': data['weather'][0]['icon'],
            'humidity': data['main']['humidity'],
            'wind': data['wind']['speed'],
        }

    return render(request, 'weather/index.html', {'weather': weather_data})
