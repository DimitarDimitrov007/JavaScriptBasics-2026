function minNumber(input){

    let lowestNum = Number.MAX_SAFE_INTEGER;
    let currentNum = Number(input[0]);
    let index = 1;

    while(currentNum !== "Stop"){
        currentNum = Number(currentNum);

        if(currentNum < lowestNum){
            lowestNum= currentNum;

        }

        currentNum = input[index];
        index ++;
    }

    console.log(lowestNum);

}
minNumber(["100",
"99",
"80",
"70",
"Stop"]);
