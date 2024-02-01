const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7fcf83392msh54e2e667a6286bcp1037d1jsn5ee794f89957',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityname.innerHTML= city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp2
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity2
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed2
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err))
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
	
})
getweather("Ghaziabad")
