function bla(start,finish){
    let currentNum = Number(start);
    let end = Number(finish);
    let evenSum = 0;
    let oddSum = 0;
    let allNumbers = "";

    while(currentNum <= end){
        currentNum = String(currentNum);

        for(let i = 0; i < currentNum.length; i++){
             
            let currentChar = Number(currentNum[i]);

            if((i + 1) % 2 === 0){
                evenSum += currentChar;

            }else{
                oddSum += currentChar;
            }

        }

         if(oddSum === evenSum){
                allNumbers += String(currentNum) + " ";

            }

            oddSum = 0;
            evenSum = 0;

            currentNum = Number(currentNum);

        currentNum ++;
        
    }

    console.log(allNumbers);

}
bla(123456,
124000
);