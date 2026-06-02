function pairs(input){

    let numberOfPairs = Number(input[0]);
    let allSums = [];
    let highestSumOfTwo = 0;
    let lowestSumOfTwo = 0;

    for(let i = 1 ; i < input.length; i += 2){
        let numOne = Number(input[i]);
        let numTwo = Number(input[i + 1]);

        let sum = numOne + numTwo;
        let buffer = highestSumOfTwo;
        
         if(sum > highestSumOfTwo){
            lowestSumOfTwo = buffer;
            highestSumOfTwo = sum;
        

         }else{
            lowestSumOfTwo = sum
         }
         

    }

    if(highestSumOfTwo === lowestSumOfTwo){
        console.log(`Yes, value=${highestSumOfTwo}`);

    }else if(numberOfPairs === 1){
        console.log(`Yes, value=${highestSumOfTwo}`);

    }else{
        console.log(`No, maxdiff=${highestSumOfTwo - lowestSumOfTwo}`);
    }
}
pairs([2,
-1,
0,
0,
-1]);


