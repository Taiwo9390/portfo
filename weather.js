async function getWeather() {
    let city = document.getElementById('city').value.trim(); // Remove extra spaces

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    let apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
    let url = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather-result').innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = <p>City not found! Please try again.</p>;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('weather-result').innerHTML = <p>Something went wrong. Try again later.</p>;
    }
}