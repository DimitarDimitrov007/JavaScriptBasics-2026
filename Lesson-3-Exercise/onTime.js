function onTime(examHour,examMinutes,arrivalHour,arrivalMinutes){
    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    let diff  = Math.abs(examTime - arrivalTime);
    let h = Math.floor(arrivalTime /60);
    let m = arrivalTime % 60;
    

    if(examTime >= arrivalTime && examTime - arrivalTime <= 30 ){


    }
  
}
onTime(9,30,9,50);