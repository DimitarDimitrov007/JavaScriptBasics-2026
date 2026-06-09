function kucheVlacheReis(num){
    
    
    let isBeeger = false;
    let printCurrentLine = "";

    for(let i = 1 ; i <= num ; i ++){
        for(let x = 1 ; x <= i; x++){
            if(currentNum > num){
                isBeeger = true;
                break;
            }

            printCurrentLine += currentNum + " ";
            currentNum ++;


        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBeeger){
            break;
        }
    }


}
kucheVlacheReis(7);