function clock2(){
    for(let i = 0; i <= 23; i ++){
        let hour = Number(i);

        for(let y = 0; y <= 59; y ++){
            let minute = Number(y);

            
            for(let z = 0 ; z <= 59 ; z ++){
                let seconds = Number(z);

                console.log(`${hour} : ${minute} : ${seconds}`);
            }
        }
    }

}
clock2();