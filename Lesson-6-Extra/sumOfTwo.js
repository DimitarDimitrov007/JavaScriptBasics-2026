function sumOfTwo(start,finish,magicNum){
    
    let count = 0;
    let isFound = false;

    for(let a = start ; a <= finish ; a ++){
        for(let b = start ; b <= finish ; b ++){

            let currentFirstNum = Number(a);
            let currentSecondNum = Number(b);
            count ++;

            if(currentFirstNum + currentSecondNum === magicNum){
                console.log(`Combination N:${count} (${currentFirstNum} + ${currentSecondNum} = ${magicNum})`);
                return;

            }
        }

    }

    if(isFound === false){
        console.log(`${count} combinations - neither equals ${magicNum}`);

    }

}
sumOfTwo(1,
10,
5
);