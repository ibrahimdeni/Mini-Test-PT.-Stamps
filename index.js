function fetchWeather() {
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=jakarta&appid=7af7bf73abf8c260be9d889d547f9535";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Weather Forecast :");
      for (i = 2; i <= 40; i = i + 8) {
        var tempt = (data.list[i].main.temp - 273.15).toFixed(2);

        //cara format jenis 1 (mengikuti waktu aktual/local)
        //contoh hasil format "Sun 30 Oct 2022"
        // var time = new Date(data.list[i].dt_txt).toDateString();

        //cara format jenis 2 (mengikuti waktu UTC(Universal Time Coordinated))
        //contoh hasil format "Sun, 30 Oct 2022" (tapi telat 7 jam dibanding WIB)
        var time = new Date(data.list[i].dt_txt);
        time = time.toUTCString();
        time = time.split(" ").slice(0, 4).join(" ");

        console.log(`${time}: ${tempt}°C`);
      }
    });
}

fetchWeather();
