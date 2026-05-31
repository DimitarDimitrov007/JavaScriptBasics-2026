function truckDriver(season,km){

    let salary = 0;

    switch(season){

        case "Spring" :

        case "Autumn" :
            if(km <= 5000){
                salary = km * 0.75 * 4;

            }else if(km > 5000 && km <= 10000){
                salary = km * 0.95 * 4;

            }else if(km > 10000 && km <= 20000){
                salary = km * 1.45 * 4
            }
            break;

        case "Summer" :
             if(km <= 5000){
                salary = km * 0.90 * 4;

            }else if(km > 5000 && km <= 10000){
                salary = km * 1.1 * 4;

            }else if(km > 10000 && km <= 20000){
                salary = km * 1.45 * 4
            }
            break;
            
        case "Winter" :
              if(km <= 5000){
                salary = km * 1.05 * 4;

            }else if(km > 5000 && km <= 10000){
                salary = km * 1.25 * 4;

            }else if(km > 10000 && km <= 20000){
                salary = km * 1.45 * 4
            }
            break;
    }

    console.log((salary * 0.9).toFixed(2));


}
truckDriver("Summer",3455);