function clock2(hours,minutes){
    let clockHours = hours;
    let clockMinutes = minutes;

    let totalTimeInSeconds = clockHours * 60 + clockMinutes + 15;
    
    let newHour = Math.trunc(totalTimeInSeconds / 60);

    if(newHour === 24){
        newHour = 0;
    }
    let newMinutes = totalTimeInSeconds % 60;

    if(newMinutes < 10){
        console.log(`${newHour}:0${newMinutes}`);
    }else{
        console.log(`${newHour}:${newMinutes}`);
    }
}
clock2(23,59);