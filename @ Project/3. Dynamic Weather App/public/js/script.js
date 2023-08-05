const currentDate = document.getElementById("date");
const time = document.getElementById("time");
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
currentDate.innerHTML = getCurrentDay()
setInterval(() => {
    const dateObj = new Date();
    var hour1 = dateObj.getHours()>12 ? dateObj.getHours() - 12 : dateObj.getHours() ;
    var hours = hour1.toString().length == 1 ? "0"+hour1 : hour1;
    var minutes = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    time.innerHTML = `<b>Time:</b> (${hours}:${minutes}:${second} ${ampm})`;
}, 1000)

