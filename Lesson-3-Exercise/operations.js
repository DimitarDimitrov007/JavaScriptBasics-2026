function operations(n1,n2,operator){
    let eavenOrOdd = "";
    let result = 0;


    switch(operator){

        case "+" :
            result = n1 + n2;
            break;

        case "-" :
            result = n1 - n2;
            break;

        case "*" :
            result = n1 * n2;
            break;

        case "/" :
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);

            }else{
                 result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

            }
            break;

        case "%" :
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);

            }else{
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
            

    }

    if(operator === "+" || operator === "-" || operator === "*"){
        if(result % 2 === 0){
            eavenOrOdd = "even";

        }else{
            eavenOrOdd = "odd";
        }

        console.log(`${n1} ${operator} ${n2} = ${result} - ${eavenOrOdd}`);
    }

}
operations(112,0,"/");
