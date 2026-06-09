function happy(number) {
    let happyNumbers = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    let currentNumber = (`${a}${b}${c}${d}`);
                    let sumOfFirstTwo = Number(currentNumber[0]) + Number(currentNumber[1]);
                    let sumOfLastTwo = Number(currentNumber[2]) + Number(currentNumber[3]);

                    if (sumOfFirstTwo === sumOfLastTwo && number % sumOfFirstTwo === 0) {
                        happyNumbers += currentNumber + " ";

                    }


                }
            }
        }

    }

    console.log(happyNumbers);

}
happy(3);