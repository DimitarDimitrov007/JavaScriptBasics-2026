function carNumber(start,end){
    let specialNumbers = "";

    for(let a = start; a <= end ; a ++){
        for(let b = start; b <= end ; b ++){
            for(let c = start; c <= end ; c ++){
                for(let d = start; d <= end ; d ++){
                    let currentNumber = String(`${a}${b}${c}${d}`);
                    let firstNumber = Number(currentNumber[0]);
                    let lastNumber = Number(currentNumber[3]);
                    let sumOfMiddle = Number(currentNumber[1]) + Number(currentNumber[2]);

                    if((firstNumber % 2 === 0 && lastNumber % 2 !== 0) || (firstNumber % 2 !== 0 && lastNumber % 2 === 0)){
                        if(firstNumber > lastNumber){
                            if(sumOfMiddle % 2 === 0){
                                specialNumbers += currentNumber + " ";
                            }
                        }
                    }

                }
            }
        }

    }

    console.log(specialNumbers);

}
carNumber(2,3);