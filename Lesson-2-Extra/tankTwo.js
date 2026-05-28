function tankTwo(fuel,lites,card){
    let price = 0;

    if(fuel === "Gas"){
        if(card === "Yes"){
            price = lites * 0.85;
        }else{
            price = liters * 0.93;
        }

    }else if(fuel === "Gasoline" ){
         if(card === "Yes"){
            price = lites * 2.04;
        }else{
            price = liters * 2.22;
        }
        

    }else if(fuel === "Diesel"){
          if(card === "Yes"){
            price = lites * 2.21;
        }else{
            price = liters * 2.33;
        }

    }

    if(lites >= 20 && lites <= 25){
        price = price * 0.92;
    }else if(lites > 25){
        price = price * 0.90;
    }

    console.log(`${price.toFixed(2)} lv.`);

}

tankTwo("Gas",30,"Yes");