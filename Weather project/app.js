const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const icon=document.querySelector(".weather-icon");

const unit="metric";
// const cityName="searchbox.value";
const apikey="4fd949e19275b42348f8ad753d8428ff";
const url="https://api.openweathermap.org/data/24fd949e19275b42348f8ad753d8428ff09.5/weather?q=bangalore&units="+unit+"&appid="+apikey;


  
async function checkWeather(){

    const response=await fetch(url+`&appid=${apikey}`); //url madhun particular city cha data fetch kara.
    var data=await response.json();  //to convert data into java script object.

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;   //city is class-name and data ids defined above.
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";   //temp data is present inside main
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";   
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";   
    document.querySelector(".humidity").innerHTML=data.main.humidity;  
    
    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png"

    }
     else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png"

    }
     else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png"

    }
     else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png"

    }
  
     else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png"

    }
  


}


checkWeather();   //calling the function 


//pass the city name