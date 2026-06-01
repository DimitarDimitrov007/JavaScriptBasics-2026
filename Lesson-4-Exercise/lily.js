function solve(years,machinePrice,pricePerToy){
    let totalMoney = 0;
    let toys = 0;
    let moneyLastYear = 0;


    for(let i = 1; i <= years ; i ++){

        if(i % 2 === 0){
            moneyLastYear += 10
            totalMoney += moneyLastYear;
            totalMoney -= 1;

        }else{
            toys += 1;
        }
    }

    let allTogether = totalMoney + toys * pricePerToy ;

    if(allTogether >= machinePrice){
        console.log(`Yes! ${(allTogether - machinePrice).toFixed(2)}`);

    }else{
        console.log(`No! ${(machinePrice - allTogether).toFixed(2)}`);
    }

}
solve(10,170.00,6);