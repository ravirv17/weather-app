const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="f3db296e73593eb74092a451aa29c85d";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    let data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    let d=data.weather[0].main.toLowerCase();
    document.querySelector(".weather-icon").src=`images/${d}.png`;
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})