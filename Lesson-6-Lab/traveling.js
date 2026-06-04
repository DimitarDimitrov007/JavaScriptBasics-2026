function traveling(input){
    let destination = input[0];
    let sumNeeded = Number(input[1]);
    let moneySaved = 0;
    

    for(let i = 2; i < input.length; i++){

        let currentSum = input[i];

        if(currentSum === "End"){
            break;

        }else{
            currentSum = Number(currentSum);
            moneySaved += currentSum;

        }

        if(moneySaved >= sumNeeded){
            console.log(`Going to ${destination}!`);
            destination = input[i + 1];
            moneySaved = 0;
            sumNeeded = Number(input[i + 2]);
            i += 2;
        }
    }

}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);
