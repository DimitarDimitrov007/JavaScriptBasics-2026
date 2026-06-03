function vacation(input){

    let moneyForVacation = Number(input[0]);
    let savedMoney = Number(input[1]);
    let counterSpending = 0;
    let days = 0;
    let index = 2;

    while(savedMoney < moneyForVacation){
        days ++;
        let command = input[index];
        let money = Number(input[index + 1]);

        if(command === "spend"){
            counterSpending += 1;
            savedMoney -= money;

            if(counterSpending === 5){
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;
            }


            if(savedMoney < 0){
                savedMoney = 0;

            }

        }else{
            counterSpending = 0;
            savedMoney += money;

        }

        index += 2;
      
    }

    if(savedMoney >= moneyForVacation){
        console.log(`You saved the money for ${days} days.`);

    }

}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
