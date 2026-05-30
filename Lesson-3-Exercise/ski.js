function ski(days,type,rate){
    let price = 0;

    switch(type){

        case "room for one person" :
            price = (days-1) * 18;
            break;


        case "apartment" :
              price = (days-1) * 25;

              if(days < 10){
                price = price * 0.7;

              }else if(days >= 10 && days <=15){
                price = price * 0.65;

              }else if(days > 15){
                price = price * 0.5;

              }
              break;

        case "president apartment" :
              price = (days-1) * 35;

              if(days < 10){
                price = price * 0.9;

              }else if(days >= 10 && days <=15){
                price = price * 0.85;

              }else if(days > 15){
                price = price * 0.8;

              }
              break;


    }

    if(rate = "positive"){
        price = price * 1.25;

    }else{
        price = price * 0.9;
    }

    console.log(price.toFixed(2));

}
ski(30,"president apartment","negative");