function profit(oneLevaMax,twoLevaMax,fiveLevaMax,sum){

    for(let a = 0 ; a <= oneLevaMax ; a ++){
        for(let b = 0 ; b <= twoLevaMax ; b ++){
            for(let c = 0 ; c <= fiveLevaMax ; c ++){

                let currentSum = a * 1 + b * 2 + c * 5;

                if(currentSum === sum){
                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }

}
profit(3,
2,
3,
10
);