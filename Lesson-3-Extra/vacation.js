function vacation(budget,season){
    let typeOfAccomodation = "";
    let place = "";
    let price = 0;

    if(budget <= 1000){
        typeOfAccomodation = "Camp";
        if(season === "Summer"){
            place = "Alaska";
            price = budget * 0.65;

        }else{
            place = "Morocco";
            price = budget * 0.45;

        }

    }else if(budget > 1000 && budget <= 3000) {
        typeOfAccomodation = "Hut";
        if(season === "Summer"){
            place = "Alaska";
            price = budget * 0.8;

        }else{
            place = "Morocco";
            price = budget * 0.6;

        }

    }else if(budget  > 3000){
         typeOfAccomodation = "Hotel";
         if(season === "Summer"){
            place = "Alaska";
            price = budget * 0.9;

        }else{
            place = "Morocco";
            price = budget * 0.9;

        }

    }

    console.log(`${place} - ${typeOfAccomodation} - ${price.toFixed(2)}`);

}
vacation(800,"Summer");