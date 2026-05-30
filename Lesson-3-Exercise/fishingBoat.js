function fishingBoat(budget,season,fishermen){

    let totalPrice = 0;

    switch(season){

        case "Spring":
            totalPrice += 3000;
            break;

        case "Summer" :
           

        case "Autumn"  :  
         totalPrice += 4200;
            break;

        case "Winter" :
            totalPrice += 2600;
            break;
    }

    if(fishermen <= 6){
        totalPrice = totalPrice * 0.9;
        
    }else if(fishermen >= 7 && fishermen <=11){
        totalPrice = totalPrice * 0.85;

    }else if(fishermen > 12){
        totalPrice = totalPrice * 0.75;

    }

    if(fishermen % 2 === 0 && season !== "Autumn"){
        totalPrice = totalPrice * 0.95;
    }


    if(budget >= totalPrice){
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);

    }else{
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }
    

}
fishingBoat(3000,"Summer",11);