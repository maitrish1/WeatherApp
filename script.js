let submitCity=document.getElementById('submit-city')
let nameDisplay=document.getElementById('name-display')
let tempDisplay=document.getElementById('temp-display')
let feelsLikeDisplay=document.getElementById('feels-like-display')
let mainDescDisplay=document.getElementById('main-desc-display')
let minMax=document.getElementById('min-max')
let container=document.querySelector('.container')
let body=document.querySelector('body')

function getInputValue() {
    
    let city=document.getElementById('city').value
    getData(city)
  }

async function getData(city){
    
    let value=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=c7fc272a3b2073c04bca466851d816df`)
    const data=await value.json()
    console.log(data)
    nameDisplay.innerHTML= `${data.city.name}, ${data.city.country}`
    tempDisplay.innerHTML=`Temperature : ${Math.ceil(data.list[0].main.temp)} ℃ `
    minMax.innerHTML=`Min/Max : ${Math.floor(data.list[0].main.temp_min)} ℃ / ${Math.ceil(data.list[0].main.temp_max)} ℃`
    feelsLikeDisplay.innerHTML=`Feels like : ${Math.floor(data.list[0].main.feels_like)} ℃`
    mainDescDisplay.innerHTML=data.list[0].weather[0].main

   
    const scrollAble=document.querySelector('.scrollable')


    for(let i=0;i<=5;i++){
        let html=document.createElement('div')
        html=`Temperature : ${Math.ceil(data.list[i].main.temp)} ℃`
        container.appendChild=html
    }


    if(data.list[0].weather[0].main==='Clouds'){
        console.log('clouds')
        body.style.backgroundImage="url('clouds1.jpg')"
    }
    else if(data.list[0].weather[0].main==='Rain'){
        console.log('rain')
        body.style.backgroundImage="url('rain3.jpg')"
    }
    else if(data.list[0].weather[0].main==='Clear'){
        console.log('clear')
        body.style.backgroundImage="url('sunny1.jpg')"
    }
    else if(data.list[0].weather[0].main==='Snow'){
        console.log('clear')
        body.style.backgroundImage="url('snow2.jpg')"
    }
}
