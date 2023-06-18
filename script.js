let systemTime = document.getElementById('system-time');
let setAlarmBtn = document.getElementById('set-alarm-btn');
let clearAlarmBtn = document.getElementById('clear-alarm-btn');
let input = document.querySelectorAll('input');
let alarmTime = document.getElementById('alarm-time');
let ringAlarm = document.getElementById('ring-alarm');




const interval = setInterval(()=> {
   let date = new Date();
   systemTime.innerText = date.toLocaleTimeString();
}, 1000);




const setALarm = () => {
   let hourVal = input[0].value;
   let minuteVal = input[1].value;
   if(hourVal == '' || minuteVal == '') {
    alert("hour and minute can't be empty");
    return;
   }
   
   alarmTime.innerHTML = `${hourVal}:${minuteVal}:00`;
   alarmTime.classList.add('alarm-style');

}


const clearAlarm = () => {
    alarmTime.innerText = '';
    input[0].value = '';
    input[1].value = '';
    alarmTime.classList.remove('alarm-style');

}







const  checkAlarm = setInterval(() => {
    let sTime = new Date();
    let systemHour = sTime.getHours();
    let systemMinute = sTime.getMinutes();
    let alarmHour = input[0].value;
    let alarmMinute = input[1].value;

    if(systemHour > 12) {
        systemHour = systemHour -12;

    }

    if(systemHour == alarmHour && systemMinute == alarmMinute) {

        ringAlarm.play();

       
    }

}, 1000);
    










setAlarmBtn.addEventListener('click', setALarm);


clearAlarmBtn.addEventListener('click', clearAlarm);