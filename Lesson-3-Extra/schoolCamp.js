function schoolCamp(season,groupType,people,nights){
    let totalPrice = 0;
    let sport = "";

    
    
    switch(season){

        case "Spring" :
            if(groupType === "girls"){
                sport = "Athletics";
                totalPrice = people * nights * 7.2;

            }else if(groupType === "boys"){
                sport = "Tennis";
                totalPrice = people * nights * 7.2;

            }else{
                sport = "Cycling";
                totalPrice = people * nights * 9.5;

            }
            break;

        case "Winter" : 
         if(groupType === "girls"){
                sport = "Gymnastics";
                totalPrice = people * nights * 9.6;

            }else if(groupType === "boys"){
                sport = "Judo";
                totalPrice = people * nights * 9.6;

            }else{
                sport = "Ski";
                totalPrice = people * nights * 10;

            }
            break;


        case "Summer":
            if(groupType === "girls"){
                sport = "Volleyball";
                totalPrice = people * nights * 15;

            }else if(groupType === "boys"){
                sport = "Football";
                totalPrice = people * nights * 15;

            }else{
                sport = "Swimming";
                totalPrice = people * nights * 20;

            }
            break;
            
    }

    if(people >= 50){
        totalPrice = totalPrice * 0.5;

    }else if(people >= 20 && people < 50){
        totalPrice = totalPrice * 0.85;

    }else if(people >= 10 && people < 20){
        totalPrice = totalPrice * 0.95;

    }
    
    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);

}
schoolCamp("Spring","girls",20,7);