function maxNumber(input){

    let biggestNum = -Infinity;
    let currentNum = Number(input[0]);
    let index = 1;

    while(currentNum !== "Stop"){
        currentNum = Number(currentNum);

        if(currentNum > biggestNum){
            biggestNum = currentNum;

        }

        currentNum = input[index];
        index ++;
    }

    console.log(biggestNum);
    

}
maxNumber([1,
3,
-1,
-3,
"Stop"])
