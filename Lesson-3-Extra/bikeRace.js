function bikeRace(young,old,type){

    let totalSum = 0;

    switch(type){

        case "trail" :
            totalSum = young * 5.5 + old * 7;
            break;

        case "cross-country" :
            totalSum = young * 8+ old * 9.5;

            if(young + old >= 50){
                totalSum = totalSum * 0.75;
                
            }
            break;

        case "downhill" :
            totalSum = young * 12.25 + old * 13.75 ;
            break;

        case "road" :
            totalSum = young * 20 + old * 21.5;
    }

    console.log((totalSum * 0.95).toFixed(2));

}
bikeRace(10,20,"trail");