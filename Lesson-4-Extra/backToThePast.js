function solve(money,year){

    let inheritance = money;
    let age = 18;

    for(let i = 1800; i <= year; i++){
        let currentYear = Number(i);
       
        if(currentYear % 2 === 0){
            
            inheritance -= 12000;

        }else{
            
            inheritance -= (12000 + 50 * age);
        }

        age += 1;

    }

    if(inheritance >= 0){
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);

    }else{
        console.log(`He will need ${(Math.abs(inheritance)).toFixed(2)} dollars to survive.`);
    }

}
solve(50000,1802);