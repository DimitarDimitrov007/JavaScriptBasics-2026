function sumSeconds(time1,time2,time3){
    let totalTimeInSec = time1 + time2 + time3;
    let minutes = Math.floor(totalTimeInSec / 60);
    let seconds = totalTimeInSec % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }

  

}
sumSeconds(35,45,44);
