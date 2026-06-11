function wheelSong(controllNumber) {
    let count = 0;
    let allMatches = "";
    let password = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    let currentPassword = `${a}${b}${c}${d}`;

                    if (a < b && c > d) {
                        if (a * b + c * d === controllNumber) {
                            count++;
                            allMatches += currentPassword + " ";

                        }
                    }

                    if(count === 4){
                        password = currentPassword;
                        count ++;

                    }

                }
            }
        }

    }

    console.log(allMatches);

    if(count >= 4){
        console.log(`Password: ${password}`);

    }else{
        console.log(`No!`);

    }

}
wheelSong(11);