function clock(hour,minutes){
    let clockHours = hour
    let clockMinutes = minutes;

    if(clockMinutes + 15 > 59){
        clockHours += 1;

        if(clockHours === 24){
            clockHours = 0;
        }
        
    }

    clockMinutes = (clockMinutes + 15) % 60;

    if(clockMinutes < 10){
        console.log(`${clockHours}:0${clockMinutes}`);
    }else{
        console.log(`${clockHours}:${clockMinutes}`);
    }

  
}
clock(0,0o1);