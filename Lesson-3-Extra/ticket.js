function ticket(budget,type,people){
    let moneyForTickets = 0;
    let moneyForTransport = 0;
    let totalMoney = 0;

    if(type === "Normal"){
        moneyForTickets = people * 249.99;

    }else{
        moneyForTickets = people * 499.99;
    }


    if(people >= 1 && people <=4){
        moneyForTransport = budget * 0.75;

    }else if(people >= 5 && people <= 9){
        moneyForTransport = budget * 0.6;

    }else if(people >= 10 && people <= 24){
        moneyForTransport = budget * 0.5;

    }else if(people >= 25 && people <= 49){
        moneyForTransport = budget * 0.4;

    }else if(people > 50){
        moneyForTransport = budget * 0.25;
    }

    totalMoney = moneyForTickets + moneyForTransport;

    if(totalMoney <= budget){
        console.log(`Yes! You have ${Math.abs((totalMoney - budget)).toFixed(2)} leva left.`);

    }else{
        console.log(`Not enough money! You need ${Math.abs((totalMoney - budget)).toFixed(2)} leva.`);
    }

}
ticket(1000,"Normal",1);