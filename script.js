//  const api = {
//         key: "a67014a656420594df138d75f9514726",
//         base:"https://api.openweathermap.org/data/2.5/"
//       }
// console.log('upasna kapoor');
// const searchbox=document.querySelector('.search-box');
// searchbox.addEventListener('keypress',setQuery);

// function setQuery(evt) {
//         if (evt.keyCode==13){
//                 getResults(searchbox.value);

//         }
// }
// function getResults(query){
//         fetch(`${api.base} weather?q={query} &units=metric&APPID=${api.key}`)
//         .then(weather=>{
//                 return weather.json();
//         }).then(displayResults);
// }
// function displayResults(weather){
//         console.log(weather);
//         let city=document.querySelector('.location.city');
// city.innerText=`${weather.name},${weather.sys.country}`;
// let now=new Date();
// let date=document.querySelector('.location .date');
// date.innerText=dateBuilder(now);

// let temp = document.querySelector('.current .temp');
// temp.innerHTML=`${Math.round(weather.main.temp)}<span>0c</span>`;

// let weather_el=document.querySelector('.current .weather');
// weather_el.innerText=weather.weather[0].main;

// let hilow=document.querySelector('.hi-low');
// hilow.innerText=`${Math.round(weather.main.temp_min)}0c/${Math.round(weather.main.temp_max)}0c`;


// }
// function dateBuilder(d){
//         let months=["january","February","March","April","May","June","July","August","Septempber","October","November","December"];
//         let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
         
//         let day=days[d.getDay()];
//         let date=d.getDate();
//         let month=months[d.getMonth()];
//         let year=d.getFullYera();
//         return `${day} ${date} ${month} ${year}`;
// }


const api = {
        key: "a67014a656420594df138d75f9514726",
        base:"https://api.openweathermap.org/data/2.5/"
      }
      
      const searchbox = document.querySelector('.search-box');
      searchbox.addEventListener('keypress', setQuery);
      
      function setQuery(evt) {
        if (evt.keyCode == 13) {
          getResults(searchbox.value);
        }
      }
      
      function getResults (query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(weather => {
            return weather.json();
          }).then(displayResults);
      }
      
      function displayResults (weather) {
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
      
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);
      
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
      
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
      
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
      }
      
      function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`;
      }