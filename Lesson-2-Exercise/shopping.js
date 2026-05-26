function shopping(budget,videocards,cpu,ram){
    let totalSum = videocards * 250 + cpu * (videocards * 250 * 0.35) + ram * (videocards * 250 * 0.1);

    if(videocards > cpu){
        totalSum = totalSum * 0.85;
    }

    if(totalSum > budget){
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);

    }else{
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    }

}
shopping(900,2,1,3);