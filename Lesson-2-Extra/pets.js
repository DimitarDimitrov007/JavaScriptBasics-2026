function pets(days,kgFood,dogFoodDayKg,catFoodDayKg,turtleFoodDayGr){
    let tutrleFoodDayKg = turtleFoodDayGr / 1000;
    let totalFoodNeeded = days * dogFoodDayKg + days * catFoodDayKg + days * tutrleFoodDayKg;

    if(totalFoodNeeded <= kgFood){
        console.log(`${Math.floor(kgFood - totalFoodNeeded)} kilos of food left.`);

    }else{
        console.log(`${Math.ceil(totalFoodNeeded - kgFood)} more kilos of food are needed.`);

    }

}
pets(2,10,1,1,1200);

