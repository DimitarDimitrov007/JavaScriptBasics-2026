function trainsport(km,timeOfday){
   
    let taxiDay = 0.7 + 0.79 * km;
    let taxiNight = 0.7 + 0.90 * km;
    let trainDay = 0.06 * km;
    let trainNight = 0.06 * km;
    let busDay = 0.09 * km;
    let busNight = 0.09 * km;



    if(km < 20){
        if(timeOfday === "day"){
            console.log(taxiDay.toFixed(2));
        }else{
            console.log(taxiNight.toFixed(2));
        }


    }else if(km < 100){
        if(timeOfday === "day"){
            console.log(busDay.toFixed(2));

        }else{
            console.log(busNight.toFixed(2));

        }
    }else{
        if(timeOfday === "day"){
            console.log(trainDay.toFixed(2));
        }else{
             console.log(trainNight.toFixed(2));
        }
        
       
    }
}
trainsport(180,"night");