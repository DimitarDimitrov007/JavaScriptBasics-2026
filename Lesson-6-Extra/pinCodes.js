function pinCodes(border1,border2,border3){
    let counter = 0;

    for(let i = 2 ; i <= border1; i ++){
        for(let x = 2 ; x <= border2; x ++){
            for(let y = 2; y <= border3; y ++){
                for(let b = 1 ; b <= x; b ++){
                    if(x % b === 0 && x >= 2 && x <= 7){
                        counter ++;
                    }
                }

                if(counter === 2 && i % 2 === 0 && y % 2 === 0){
                    console.log(`${i} ${x} ${y}`);
                }

                counter = 0;
                
            }
        }
    }

}
pinCodes(3,
5,
5);