function primePairs(firstPair, secondPair, firstPairDiff, secondPairDiff) {

    let firstTwo = Number(firstPair);
    let secondTwo = Number(secondPair);

    let matches = "";


    for (let a = firstTwo; a <= firstTwo + firstPairDiff; a++) {
        for (let b = secondTwo; b <= secondTwo + secondPairDiff; b++) {

            let currentNumber = `${a}${b}`;
            let currentFirstTwoSum = Number(`${a}`)
            let currentSecondTwoSum = Number(`${b}`);
            let count = 0;

            for (let i = 1; i <= currentFirstTwoSum; i++) {
                if (currentFirstTwoSum % i === 0) {
                    count++;

                }
            }

            for (let z = 1; z <= currentSecondTwoSum; z++) {
                if (currentSecondTwoSum % z === 0) {
                    count++;

                }
            }

            if (count === 4) {
                console.log(currentNumber);
            }


            if (currentFirstTwoSum - Number(firstTwo) > firstPairDiff) {
                if (currentSecondTwoSum - Number(secondTwo) > secondPairDiff) {
                    return;

                }
            }

        }
    }

}
primePairs(10,
    20,
    5,
    5);