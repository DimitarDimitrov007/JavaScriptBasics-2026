function cinema(type,r,c){
    let income = 0;

    switch(type){

        case "Premiere" :
            income = r * c * 12;
            console.log(`${income.toFixed(2)} leva`);
            break;

        case "Normal" :
            income = r * c * 7.5;
            console.log(`${income.toFixed(2)} leva`);
            break;

        case "Discount" :
            income = r * c * 5;
            console.log(`${income.toFixed(2)} leva`);
            break;
    }

}
cinema("Premiere",10,12);