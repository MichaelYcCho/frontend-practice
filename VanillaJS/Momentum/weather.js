const weather = document.querySelector(".js-weather");


const API_KEY = "321d8538a278ab806966b18ca93c1b44";
const COORDS='coords';


function getWeather(lat, lng){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response){   //then -> fetch의 작업이 모두 끝난 다음에 시작하라는 의미 
        return (response.json());
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });  
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
    latitude,    //js에서 키와 값을 같은 것으로 하고싶을경우 
    longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log('Cant access geo location');
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
//loadedCords안에 아무것도 없으면 결국 getweather함수가 실행됨
//asforcoords -> 위치정보 가져옴 handleGeoSuccess실행 


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
       getWeather(parseCoords.latitude, parseCoords.longitude);

    }

}


function init(){
    loadCoords();
}

init();