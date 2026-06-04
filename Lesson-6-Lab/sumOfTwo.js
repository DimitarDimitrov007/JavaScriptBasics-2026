function sumOfTwo(start,end,magicNumber){

    let combinationCount = 0;
    let isFound = false;

    for(let i = start ; i <= end ; i ++){
        for(let y = start ; y <= end ; y ++){
            combinationCount ++ ;

            if(i + y === magicNumber){
                 console.log(`Combination N:${combinationCount} (${i} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }


        }

        if(isFound){
            break;
        }
    }

    if(isFound === false){
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);

    }

}
sumOfTwo(1,
10,
5
);