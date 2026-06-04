function averageNumber(input){

    let totalNumbers = Number(input[0]);
    let currentNumber = Number(input[1]);
    let index = 2;
    let iterationsCounter = 0;
    let totalSum = 0;

    while(iterationsCounter < totalNumbers){

        iterationsCounter++;
        totalSum += currentNumber;

        currentNumber = Number(input[index]);
        index++;

    }

    console.log((totalSum / totalNumbers).toFixed(2));

}
averageNumber(["4",
"3",
"2",
"4",
"2"]);
