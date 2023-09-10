// script.js
function getWeather() {
  const apiKey = "5ec76a9c0427091626797af4b5840c39";
  const location = document.getElementById("location").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
          const city = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          document.getElementById("city").innerText = city;
          document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
          document.getElementById("description").innerText = `Description: ${description}`;
      })
      .catch((error) => {
          console.error("Error fetching weather data:", error);
          alert("Failed to fetch weather data. Please check the location and try again.");
      });
}
