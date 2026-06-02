function clock(){

    for(let i = 0; i <= 23; i ++){
        let hour = Number(i);

        for(let y = 0; y <= 59; y ++){
            let minute = Number(y);

            console.log(`${hour} : ${minute}`);
        }
    }

}
clock();