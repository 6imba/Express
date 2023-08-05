// alert(location)
const currentDate = document.getElementById("date");
const time = document.getElementById("time");
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const location1 = document.getElementById("location");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const temp_min = document.getElementById("temp_min");
const temp_max = document.getElementById("temp_max");

const getCurrentDay = () => {
    const weeks = ["Sunday","Monday","Tuesday","Wednusday","Thursday","Friday","Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    var week = weeks[dateObj.getDay()];
    var year = dateObj.getFullYear();
    var month = months[dateObj.getMonth()];
    var day = dateObj.getDay()+1;
    return `<b>Date:</b> ${year}| ${month} ${day}| ${week}`;
}
async function getData(event){
    event.preventDefault();
    if(cityName.value == ""){
        alert("Please write city name!")
    }
    else{
        try{
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=mertics&appid=a840f8d5c6b45d7291e7dca9dc2b51a3`
            const response = await fetch(api);
            const data = await response.json();
            location1.innerHTML = data.name, data.sys.country;
            weather.innerHTML = data.weather[0].main;
            temp.innerHTML = data.main.temp;
            temp_min.innerHTML = data.main.temp_min;
            temp_max.innerHTML = data.main.temp_max;
        }catch{
            alert("Please enter city name properly!")
        }
    }
}
setInterval(() => {
    const dateObj = new Date();
    var hour1 = dateObj.getHours()>12 ? dateObj.getHours() - 12 : dateObj.getHours() ;
    var hours = hour1.toString().length == 1 ? "0"+hour1 : hour1;
    var minutes = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    time.innerHTML = `<b>Time:</b> (${hours}:${minutes}:${second} ${ampm})`;
}, 1000)

currentDate.innerHTML = getCurrentDay()
submitBtn.addEventListener("click", getData);
