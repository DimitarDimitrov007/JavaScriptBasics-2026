function car(budget,season){
    let typeOfClass = "";
    let typeOfCar = "";
    let cost = 0;


    if(budget <= 100){
        typeOfClass = "Economy class";
        if(season === "Summer"){
            typeOfCar = "Cabrio";
            cost = budget * 0.35;
    
        }else{
            typeOfCar = "Jeep";
            cost = budget * 0.65;
        }

    }else if(budget > 100 && budget <= 500){
         typeOfClass = "Compact class";
        if(season === "Summer"){
            typeOfCar = "Cabrio";
            cost = budget * 0.45;
    
        }else{
            typeOfCar = "Jeep";
            cost = budget * 0.8;
        }

    }else if(budget > 500){
        typeOfClass = "Luxury class"
        typeOfCar = "Jeep";
        cost = budget * 0.9;
    }

    console.log(typeOfClass);
    console.log(`${typeOfCar} - ${cost.toFixed(2)}`);
    
}
car(450,"Summer");