const API_KEY = `ed4d56e6c11775634613a382ee89f31a`
const form = document.querySelector('form')
const search = document.querySelector('#search');
const weather = document.querySelector('#weather')

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_key}&units=metric`

// const IMG_URL = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async (city)=>{ //async and await is important to write 
    weather.innerHTML=`<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return showWeather(data)
    
}
const showWeather = (data)=>{ 
    
    if(data.cod === '404'){
        weather.innerHTML=`
        <h2>City Not Found</h2>
        `
        return
    }
    

   weather.innerHTML=`
    <div>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </div>
    <div>
        <h2>${data.main.temp} °C</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
   `

}


form.addEventListener('submit', (event)=>{
    getWeather(search.value)
    event.preventDefault(); //prevents from reading basic nature of form
})