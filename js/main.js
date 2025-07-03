getWeather('Alex')
document.getElementById('search-bar').addEventListener('input', function(){

        let myInput = document.getElementById('search-bar').value
        getWeather(myInput)
})
async function getWeather(query){
    let myFetch = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=680cafa3b2cf4af4acc44107253006&q=${query}&days=3`)
    let myData = await myFetch.json()
    let currentWeather = myData.current
    let forecastWeather = myData.forecast.forecastday
    let cityLocation = myData.location
    displayCurrentWeather(currentWeather, forecastWeather, cityLocation)
    console.log(myData);

}

// Tue Jul 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time)




function displayCurrentWeather(current, forecast, location){

    let cartona = ``
    let content = ``
    let cardStyle = 'edge'
    for (let i = 0; i < forecast.length; i++) {

        const d = new Date(`${forecast[i].date}`).toString()
        let day = d.slice(0,3)
        let date = d.slice(8,10)
        let month = d.slice(4,7)
        let forecastDay = forecast[i].day
        let weatherCondition= forecast[i].day.condition

        if (i === 0){

            weatherCondition = current.condition

            content = `                <div class="col-md-4 p-0 ${cardStyle}">
                    <div class="day d-flex justify-content-between px-2">
                        <h6>${day}</h6>
                        <span>${date} ${month}</span>
                    </div>
                    <div class="temp p-2 text-center">
                        <p>${location.name}</p>
                        <p class="fs-1">${current.temp_c}°C</p>
                        <img src="https:${weatherCondition.icon}" class="w-25" alt="">
                        <p class= "text-info">${weatherCondition.text}</p>
                    </div>
                </div>`
        }

        if (i === 1){
            content=`                <div class="col-md-4 p-0">
                    <div class="day d-flex justify-content-center px-2">
                        <h6>${day}</h6>
                    </div>
                    <div class="temp p-2 text-center">
                        <img src="https:${weatherCondition.icon}" class="w-25" alt="">
                        <p class="fs-1 max-temp">${forecastDay.maxtemp_c}°C</p>
                        <p class="fs-6 min-temp">${forecastDay.mintemp_c}°C</p>
                        <p class= "text-info">${weatherCondition.text}</p>
                    </div>
                </div>`
        }

        if (i === 2){
            content=`                <div class="col-md-4 p-0 ${cardStyle}">
                    <div class="day d-flex justify-content-center px-2">
                        <h6>${day}</h6>
                    </div>
                    <div class="temp p-2 text-center">
                        <img src="https:${weatherCondition.icon}" class="w-25" alt="">
                        <p class="fs-1 max-temp">${forecastDay.maxtemp_c}°C</p>
                        <p class="fs-6 min-temp">${forecastDay.mintemp_c}°C</p>
                        <p class= "text-info">${weatherCondition.text}</p>
                    </div>
                </div>`
        }

        cartona+= content
    }

    document.getElementById('weather-display').innerHTML = cartona
}

// function displayCurrentWeather(current, forecast, location){
//         const d = new Date(`${forecast[0].date}`).toString()
//         let day = d.slice(0,3)
//         let date = d.slice(8,10)
//         let month = d.slice(4,7)
//         let weatherCondition= current.condition

//     let cartona = `                <div class="col-md-4 p-0 edge">
//                     <div class="day d-flex justify-content-between px-2">
//                         <h6>${day}</h6>
//                         <span>${date} ${month}</span>
//                     </div>
//                     <div class="temp p-2">
//                         <p>${location.name}</p>
//                         <p class="fs-1">${current.temp_c}°C</p>
//                         <img src="${weatherCondition.icon}" class="w-25" alt="">
//                         <p>${weatherCondition.text}</p>
//                     </div>
//                 </div>`

//     document.getElementById('weather-display').innerHTML = cartona

// }