function dumbDoor(firstCharMax, midCharMax, thirdCharMax) {

    let count = 0;

    for (let a = 2; a <= firstCharMax; a++) {
        for (let b = 2; b <= midCharMax; b++) {
            for (let c = 2; c <= thirdCharMax; c++) {

                let currentNumber = `${a} ${b} ${c}`;

            
                if (a % 2 === 0 && c % 2 === 0) {

                    for (let i = 1; i <= b; i++) {

                        if (b % i === 0) {
                            count++;
                        }
                    }

                    if (count === 2) {
                        console.log(currentNumber);
                    }

                    count = 0;

                }
            }
        }
    }

}
dumbDoor(3,
5,
5
);