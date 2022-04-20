const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name")
const temp_status = document.getElementById("temp_status")
const temp = document.getElementById("temp")
const dataHide = document.querySelector('.middle_layer')
const day = document.getElementById("day")
const today_date = document.getElementById("today_date")


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerHTML = `<h1 style='color:red;' >please enter the name of city</h1>`
        dataHide.classList.add('data_hide')

    }

    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bead5a3d74f0e941f31769abc74b9c53`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood)


            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:orange;'></i>";
            }

            dataHide.classList.remove('data_hide')

        } catch {
            city_name.innerHTML = "<h1>please enter the city name properly</h1>"
            dataHide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener("click", getInfo)



const getCurrentDay = () => {
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentTime = new Date()
    var day = weekday[currentTime.getDay()]
    return day
}


const getCurrentTime = () => {
    var months = ["jan", "feb", "march", "apr", "may", "june", "jul", "aug", "sep", "oct", "nov", "dec"];

    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
    var hours = now.getHours();
    var min = now.getMinutes();

    var periods = "AM"

    if (hours > 11) {
        periods = "PM"
        if (hours > 12) hours -= 12
    }
    if (min < 10) {
        min = "0" + min
    }
    return `${month} ${day}       | ${hours}:${min} ${periods}`;
};

day.innerText = getCurrentDay()
today_date.innerText = getCurrentTime()