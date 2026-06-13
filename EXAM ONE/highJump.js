function highJump(input) {
    let target = Number(input[0]);
    let currentHeight = target - 30;
    let index = 1;
    let currentJump = Number(input[index]);
    index++;
    let fails = 0;
    let jumps = 0;

    while (true) {
      

        if (currentJump > currentHeight) {
            currentHeight += 5;
            fails = 0;
            jumps++;

            if (currentJump > target) {
                console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumps} jumps.`);
                return;
            }

        } else {
            fails++;
            jumps++;

        }

        if (fails === 3) {
            console.log(`Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`);
            return;
        }

        currentJump = Number(input[index]);
        index++;


    }

}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
