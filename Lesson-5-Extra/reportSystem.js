function reportSystem(input){

    let expectedSum = Number(input[0]);
    let currentSum = input[1];
    let index = 2;
    let collectedSum = 0;
    let withCash = true;
    let cashCounter = 0;
    let cardCounter = 0;
    let sumInCash = 0;
    let sumWithCard = 0;

    while(collectedSum < expectedSum){

        if(currentSum === "End"){
            console.log("Failed to collect required money for charity.");
            break;

        }else{
            currentSum = Number(currentSum);

        }


        if(withCash){
            withCash = false;
           if(currentSum > 100){
            console.log("Error in transaction!");

           }else{
            console.log("Product sold!");
            cashCounter++
            sumInCash += currentSum;
            collectedSum += currentSum;

           }


        }else{
            withCash = true;
            if(currentSum < 10 ){
                console.log("Error in transaction!");

            }else{
                console.log("Product sold!");
                cardCounter ++;
                sumWithCard += currentSum;
                collectedSum += currentSum;
            }
        }

        currentSum = input[index];
        index++;

    }

    if(collectedSum >= expectedSum){
        console.log(`Average CS: ${(sumInCash / cashCounter).toFixed(2)}`);
        console.log(`Average CC: ${(sumWithCard / cardCounter).toFixed(2)}`);
    }

}
reportSystem(["500",
"120",
"8",
"63",
"256",
"78",
"317"]);
