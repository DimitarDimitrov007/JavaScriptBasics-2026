function lunch(serial,episodeDuration,breakDuration){
    let lunchTime = breakDuration /8;
    let peaceTime = breakDuration / 4;
    let timeLeft = breakDuration - (lunchTime + peaceTime);

    if(timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
    }

}
lunch("Game of Thrones",60,96);
