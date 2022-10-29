function GetInfo() {
  const city = document.getElementById("inputCity");
  const cityShow = document.getElementById("cityShow");
  cityShow.innerHTML = "--" + city.value + "--";
}

function fetchWeather() {
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=7af7bf73abf8c260be9d889d547f9535";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Weather Forecast :");
      for (i = 2; i <= 40; i = i + 8) {
        var tempt = (data.list[i].main.temp - 273.15).toFixed(2);
        var time = new Date(data.list[i].dt_txt);
        time = new Date(time).toUTCString();
        time = time.split(" ").slice(0, 4).join(" ");
        console.log(`${time} : ${tempt}°C`);
      }
    });
}

fetchWeather();
