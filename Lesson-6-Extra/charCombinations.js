function charCombinations(start, finish, without) {
    let count = 0;
    let currentCombination = "";
    let hasForbidden = false;
    let allCombinations = "";

    for (let i = start.charCodeAt(0); i <= finish.charCodeAt(0); i++) {
        for (let x = start.charCodeAt(0); x <= finish.charCodeAt(0); x++) {
            for (let y = start.charCodeAt(0); y <= finish.charCodeAt(0); y++) {
                currentCombination = `${String.fromCharCode(i)}${String.fromCharCode(x)}${String.fromCharCode(y)}`;


                for (let i = 0; i < currentCombination.length; i++) {
                    let currentChar = currentCombination[i];

                    if (currentChar === without) {
                        hasForbidden = true;
                        break;

                    }


                }

                if (hasForbidden) {
                    hasForbidden = false;
                    continue;

                } else {
                    allCombinations += currentCombination + " ";
                    count++;

                }


            }
        }


    }

    allCombinations += count;

    console.log(allCombinations);
}
charCombinations("a", "c", "b");