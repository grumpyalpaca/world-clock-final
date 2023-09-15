function updateTime() {
    let sanFranciscoElement = document.querySelector("#san-francisco");
    if (sanFranciscoElement) {
      let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
      let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
      let sanFranciscoCurrentTime = moment().tz("America/Los_Angeles");
  
      sanFranciscoDateElement.innerHTML =
        sanFranciscoCurrentTime.format("MMMM Do, YYYY");
  
      sanFranciscoTimeElement.innerHTML = sanFranciscoCurrentTime.format(
        "h:mm:ss [<small>]A[</small]"
      );
    }
  
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
      let tokyoCurrentTime = moment().tz("Asia/Tokyo");
  
      tokyoDateElement.innerHTML = tokyoCurrentTime.format("MMMM Do, YYYY");
  
      tokyoTimeElement.innerHTML = tokyoCurrentTime.format(
        "h:mm:ss [<small>]A[</small]"
      );
    }
  
    let KyivElement = document.querySelector("#kyiv");
    if (KyivElement) {
      let KyivDateElement = KyivElement.querySelector(".date");
      let KyivTimeElement = KyivElement.querySelector(".time");
      let KyivCurrentTime = moment().tz("Europe/Kiev");
  
      KyivDateElement.innerHTML = KyivCurrentTime.format("MMMM Do, YYYY");
  
      KyivTimeElement.innerHTML = KyivCurrentTime.format(
        "h:mm:ss [<small>]A[</small]"
      );
    }
  }
  
  function updateCity(event) {
    setInterval(function () {
      let cityTimeZone = event.target.value;
      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
        "A"
      )}</small></div>
    </div>
    <a href="/">All Cities</a>`;
    }, 1000);
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citySelectElement = document.querySelector("#city");
  citySelectElement.addEventListener("change", updateCity);