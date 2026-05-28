function cat(daysOff){
    let norm = 30000;
    let wokingDays = 365 - daysOff;
    let timeDuringWorkigDays = wokingDays * 63;
    let timeDuringOffDays =daysOff * 127;
    let totalTime = timeDuringOffDays + timeDuringWorkigDays;

    if(totalTime > norm){
        let timeLeft = totalTime - norm ;
        console.log("Tom will run away");
        console.log(`${Math.floor(timeLeft / 60)} hours and ${(timeLeft % 60)} minutes more for play`)

    }else{
        let timeLeft = norm - totalTime;
        console.log("Tom sleeps well");
        console.log(`${Math.floor(timeLeft / 60)} hours and ${(timeLeft % 60)} minutes less for play`);
    }

}
cat(20);