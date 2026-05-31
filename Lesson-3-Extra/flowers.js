function flowers(hrizantemi,rozi,laleta,season,holiday){

    let totalSum = 0;

    switch(season){
        
        case "Spring" :

        case "Summer" :
            totalSum = hrizantemi * 2 + rozi * 4.1 + laleta * 2.5;

            if(holiday ==="Y"){
                totalSum = totalSum * 1.15;
            }

            if(season === "Spring" && laleta > 7){
                totalSum = totalSum * 0.95;

            }

            if(hrizantemi + rozi + laleta > 20){
                totalSum = totalSum * 0.8;
            }

            break;


        case "Autumn" :

        case "Winter" :
            totalSum = hrizantemi * 3.75 + rozi * 4.5 + laleta * 4.15;

            if(holiday === "Y"){
                totalSum = totalSum * 1.15;
            }

            if(season === "Winter" && rozi >= 10){
                totalSum = totalSum * 0.9;
            }

             if(hrizantemi + rozi + laleta > 20){
                totalSum = totalSum * 0.8;
            }
            break;

    }

    console.log((totalSum + 2).toFixed(2));

}
flowers(2,4,8,"Spring","Y");