const placeWeather = document.getElementById("weather");
const API_KEY = "c3df8f6af18e5750ad8bf59235540d55";

function getWeather(lat, lon) {
	console.log(lat, lon);
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`, // API_key라고 해서 안나왔다.
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			console.log(json);
			const temp = json.main.temp;
			const place = json.name;
			const weather = json.weather[0].description;
			placeWeather.innerText = `${place}의 현재 기온: ${temp}도 입니다. / ${weather}`;
		});
}

// coords 좌표
function handleGeoSuccess(pos) {
	console.log(pos);
	const latitude = pos.coords.latitude;
	const longitude = pos.coords.longitude;
	getWeather(latitude, longitude);
}

function handleGeoError() {
	console.log("error");
}

function init() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();
