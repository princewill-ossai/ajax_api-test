document.getElementById("button").addEventListener("click", getData);

async function getData() {
  const apiKey = "13145baaf7726f3f2c3674419bd33977";
  const city = document.getElementById("cityInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new error("City not found");
    }

    const data = await response.json();
    const weatherDisplay = document.getElementById("weather");

    const weatherInfo = `
          <div class="display-result">
             <h3>Weather in ${data.name}</h3>
             <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
             <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
             <p><strong>Weather:</strong> ${data.weather[0].description}</p>
             <p><strong>Wind speed:</strong> ${data.wind.speed} M/s</p>
          </div>
        `;

    weatherDisplay.innerHTML = weatherInfo;
  } catch (error) {
    alert("Request Failed", response.status);
  }
}






// const apiKey = "13145baaf7726f3f2c3674419bd33977"

// async function fetchWeather(city) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("City not found");
//     }
//     const data = await response.json();
//     displayWeather(data);
//   } catch (error) {
//     alert(error.message);
//   }
// }

// function getData(data) {
//   const cityName = document.getElementById("cityName");
//   const temperature = document.getElementById("temperature");
//   const description = document.getElementById("description");
//   const humidity = document.getElementById("humidity");
//   const windSpeed = document.getElementById("windSpeed");

//   cityName.textContent = `${data.name}, ${data.sys.country}`;
//   temperature.textContent = `Temperature: ${data.main.temp}°C`;
//   description.textContent = `Weather: ${data.weather[0].description}`;
//   humidity.textContent = `Humidity: ${data.main.humidity}%`;
//   windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
// }

// document.getElementById("searchButton").addEventListener("click", () => {
//   const cityInput = document.getElementById("cityInput").value;
//   if (cityInput) {
//     fetchWeather(cityInput);
//   } else {
//     alert("Please enter a city name");
//   }
// });

