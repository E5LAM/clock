function digitalClock(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";
     
      m = (m < 10 ? "0" : "") + m;
      s = (s < 10 ? "0" : "") + s;
      var session = (h < 12 ? "AM" : "PM");

      h = (h > 12 ? h - 12 : h);
      
      h = (h == 0 ? 12 : h);
      h = (h < 10 ? "0" : "") + h;
    document.getElementById("digital-clock").innerHTML = h + ":" + m + ":"+ s + " " + session ;
    setTimeout(digitalClock , 1000);
}
digitalClock();
////////////////////////////////////////
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() =>{
    
     let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
    
})

///////////////////////////////////////
const inputEl = document.querySelector("#dn");

const bodyEl = document.querySelector("body");

const boxEl = document.querySelector("#clock-box");

const clockBorderEl = document.querySelector(".clock");

const digitalEl = document.querySelector("#digital-clock");

const radioClockEl = document.querySelector("#radio-clock");

const radioDigitalClockEl = document.querySelector("#radio-digital-clock")

const sunEl = document.querySelector(".sun");

const moonEl = document.querySelector(".moon");
updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "rgb(2, 42, 95)";
    boxEl.style.boxShadow = "-4px -4px 10px rgb(177, 177, 177),inset 4px 4px 10px rgb(177, 177, 177),inset -4px -4px 10px rgb(177, 177, 177),4px 4px 10px rgb(177, 177, 177)";
    clockBorderEl.style.boxShadow = "-4px -4px 10px rgb(177, 177, 177),inset 4px 4px 10px rgb(177, 177, 177),inset -4px -4px 10px rgb(177, 177, 177),4px 4px 10px rgb(177, 177, 177)";
    digitalEl.style.textShadow = "-2px -2px 10px rgb(177, 177, 177),2px 2px 10px rgb(177, 177, 177)";
    sunEl.style.display = "none";
    moonEl.style.display = "flex";
  } else {
    bodyEl.style.background = "rgb(89, 158, 248)";
    boxEl.style.boxShadow = "5px 5px 25px 5px rgba(92, 92, 92, 0.13),-5px -5px 25px 5px rgba(92, 92, 92, 0.13)";
    clockBorderEl.style.boxShadow = "-4px -4px 10px rgba(92, 92, 92, 0.432),inset 4px 4px 10px rgba(92, 92, 92, 0.432),inset -4px -4px 10px rgba(92, 92, 92, 0.432),4px 4px 10px rgba(92, 92, 92, 0.432)";
    digitalEl.style.textShadow = "-4px -4px 10px rgba(92, 92, 92, 0.432),4px 4px 10px rgba(92, 92, 92, 0.432)"
    sunEl.style.display = "flex";
    moonEl.style.display = "none";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

//////////////////////////////////////////////////

function changeClock(){
  if(radioClockEl.checked){//radio
    digitalEl.style.display = "none";//element
  }else{
    digitalEl.style.display = "flex";//element

  }
}
radioDigitalClockEl.addEventListener("input", () => {//radio
  changeClock();
  updateLocalStorage();
});
// changeClock();

/////////////////////////////////////////////////////////////////////////////////////////////

function changeDigitalClock(){
  if(radioDigitalClockEl.checked){ //radio
    clockBorderEl.style.display = "none"; //element
  }else{
    clockBorderEl.style.display = "flex";//element

  }
}
radioClockEl.addEventListener("input", () => {
  changeDigitalClock();
  updateLocalStorage();
});
// changeDigitalClock();
