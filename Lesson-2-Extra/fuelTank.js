function fuelTank(typeOfFuel,totalLites){

    if(typeOfFuel === "Diesel" || typeOfFuel === "Gas" || typeOfFuel ==="Gasoline" ){
        if(totalLites >= 25){
            console.log(`You have enough ${typeOfFuel.toLowerCase()}.`);

        }else{
            console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`);

        }
    

}else{
    console.log("Invalid fuel!");
}

}
fuelTank("Diesel",10);