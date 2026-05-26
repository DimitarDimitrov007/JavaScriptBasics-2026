function worldRecord(recordInSec,meters,secForMeter){

    let timeNeeded = meters * secForMeter;
    let delay = (Math.floor(meters / 15)) * 12.5;
   
    let totalTime = timeNeeded + delay;

    if(totalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    }

}
worldRecord(10464,1500,20);