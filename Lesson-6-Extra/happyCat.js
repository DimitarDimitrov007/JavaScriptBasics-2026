function happyCat(days,hoursPerDay){

    let totalSum = 0;
    let currentDaySum = 0;

    for(let d = 1 ; d <= days ; d ++){
        for(let h = 1 ; h <= hoursPerDay; h ++){

            let currentDay = Number(d);
            let currentHour = Number(h);


            if(d % 2 === 0 && h % 2 !== 0){
                totalSum += 2.5;
                currentDaySum += 2.5;

            }else if(d % 2 !== 0 && h % 2 === 0){
                totalSum += 1.25;
                currentDaySum += 1.25;

            }else{
                totalSum += 1;
                currentDaySum += 1;

            }

        }

        console.log(`Day: ${d} - ${currentDaySum.toFixed(2)} leva`);
        currentDaySum = 0;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);

}
happyCat(2,
5
);