function journey(budget,season){
    
    let destination = "";
    let accomodation = 0;
    let type = "";

    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            accomodation = budget * 0.3;
            type = "Camp";

        }else{
            accomodation = budget * 0.7;
            type = "Hotel";

        }

    }else if(budget <= 1000){
        destination = "Balkans";
        if(season === "summer"){
            accomodation = budget * 0.4;
            type = "Camp";

        }else{
            accomodation = budget * 0.8;
            type = "Hotel";

        }

    }else if(budget > 1000){
        destination = "Europe";
        accomodation = budget * 0.9;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${accomodation.toFixed(2)}`);


}
journey(50,"summer");