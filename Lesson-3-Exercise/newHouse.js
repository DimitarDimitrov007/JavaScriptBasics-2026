function newHouse(type,quantity,budget){

    let totalPrice = 0;

    switch(type){

        case "Roses" :
            if(quantity > 80){
                totalPrice = quantity * 5 * 0.9;
            }else{
                totalPrice = quantity * 5;
            }
            break;

        case "Dahlias" :
            if(quantity > 90 ){
                totalPrice = quantity * 3.8 * 0.85;
            }else{
                totalPrice = quantity * 3.8;
            }
            break;

        case "Tulips" :
            if(quantity > 80){
                totalPrice = quantity * 2.8 * 0.85;
            }else{
                totalPrice = quantity * 2.8;
            }
            break;

        case "Narcissus" :
            if(quantity < 120){
                totalPrice = quantity * 3 * 1.15;
            }else{
                totalPrice = quantity * 3;
            }
            break;

        case "Gladiolus" :
            if(quantity < 80){
                totalPrice = quantity * 2.5 * 1.2;
            }else{
                totalPrice = quantity * 2.5;
            }
            break;

    }

    if(budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - totalPrice).toFixed(2)} leva left.`);

    }else{
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
        
    }

}
newHouse("Roses",55,250);