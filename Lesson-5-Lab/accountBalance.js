function accountBalance(input){
    let total = 0;
    let index = 0;
    let currentSum = input[index];
    index ++

    while(currentSum !== "NoMoreMoney"){
      let amount = Number(currentSum);
      

        if(amount < 0){
            console.log(`Invalid operation!`);
            break;

        }

        total += amount;

        console.log(`Increase: ${amount.toFixed(2)}`);


        currentSum = input[index];
        index ++;

    }

    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);
