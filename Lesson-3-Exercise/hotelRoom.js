function hotelRoom(month,nights){
    let priceForAppartment = 0;
    let priceForStudio = 0;

    switch(month){
        
        case "May" :

        case "October" :
            priceForStudio = nights * 50;
            priceForAppartment = nights * 65;

            if(nights > 7 && nights <= 14){
                priceForStudio = priceForStudio * 0.95;
            }else if(nights > 14){
                priceForStudio = priceForStudio * 0.7;
            }
            break;

        case "June" :
            
        case "September" :
            priceForStudio = nights * 75.2;
            priceForAppartment = nights * 68.7;

            if(nights > 14){
                priceForStudio = priceForStudio * 0.8;
            }
            break;

        case "July" :

        case "August" :
            priceForStudio = nights * 76;
            priceForAppartment = nights * 77;
            break;

    }

    if(nights > 14){
        priceForAppartment = priceForAppartment * 0.9;
    }

    console.log(`Apartment: ${priceForAppartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
    
}
hotelRoom("May",15);