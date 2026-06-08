function combinations(n){

    let variations = 0;

    for(let i = 0; i <= n; i++){
        for(let y = 0 ; y <= n; y ++){
            for(let x = 0 ; x <= n ; x ++){
                if(i + y + x === n){
                    variations += 1
                }
            }
        }
    }

    console.log(variations);

}
combinations(25);