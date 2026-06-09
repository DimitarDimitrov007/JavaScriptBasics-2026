function specialNumbers(n){

    let baseNumber = Number(n);
    let allSpecialNumbers = "";
    let initialNumber = 1111;
    let isSpecial = true;
    
    while(initialNumber <= 9999){
        initialNumber = String(initialNumber);

        for(let i = 0; i < initialNumber.length; i++){
            let currentCharOfInitialNumber = initialNumber[i];
            currentCharOfInitialNumber = Number(currentCharOfInitialNumber);

            if(baseNumber % currentCharOfInitialNumber === 0){
                isSpecial = true;
                continue;
                
            }else{
                isSpecial = false;
                break;

            }

        }

        if(isSpecial){
            allSpecialNumbers += initialNumber + " ";
        }


        initialNumber = Number(initialNumber);

        initialNumber ++;
    }

    console.log(allSpecialNumbers);

}
specialNumbers(3);