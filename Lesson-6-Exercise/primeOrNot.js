function primeOrNot(input){

    let currentItem = input[0];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let counter = 0;
    let index = 1;

    while(currentItem !== "stop"){

        currentItem = Number(currentItem);

        if(currentItem < 0){
            console.log("Number is negative.");
            currentItem = input[index];
            index ++;
            continue;

        }

                   for(let i = 1 ; i <= currentItem ; i++){
                    if(currentItem % i === 0){
                        counter ++;

                    }


                   }

                   if(counter === 2){
                    primeSum += currentItem;
                    counter = 0;

                   }else{
                    nonPrimeSum += currentItem;
                    counter = 0;

                   }

                   currentItem = input[index];
                   index ++;

      
        
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);


}
primeOrNot(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);
