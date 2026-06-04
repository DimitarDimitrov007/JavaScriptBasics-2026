function dishwasher(input){

    let bottles = Number(input[0]);
    let totalDetrigent = bottles * 750;
    let loadingCounter = 0;
    let platesOrPots = input[1];
    let platesCleaned = 0;
    let potsCleaned = 0;
    let index = 2;


    while(totalDetrigent >= 0){
        loadingCounter ++ ;

        if(platesOrPots === "End"){
            break;

        }else{
            platesOrPots = Number(platesOrPots);
        }
        

        if(loadingCounter % 3 === 0){
            totalDetrigent -= platesOrPots * 15;
            potsCleaned += platesOrPots;

        }else{
            totalDetrigent -= platesOrPots * 5;
            platesCleaned += platesOrPots;

        }

        platesOrPots = input[index];
        index++ ;

    }

     if(totalDetrigent < 0){
            console.log(`Not enough detergent, ${Math.abs(totalDetrigent)} ml. more necessary!`);

        }else{
            console.log("Detergent was enough!");
            console.log(`${platesCleaned} dishes and ${potsCleaned} pots were washed.`);
            console.log(`Leftover detergent ${totalDetrigent} ml.`);

        }


}
dishwasher(["2 ",
"53",
"65",
"55",
"End"]);
