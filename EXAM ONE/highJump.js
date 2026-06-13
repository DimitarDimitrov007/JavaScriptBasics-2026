function highJump(input) {
    let target = Number(input[0]);
    let currentHeight = target - 30;
    let index = 1;
    let currentJump = Number(input[index]);
    index++;
    let fails = 0;
    let jumps = 0;

    while (fails < 3) {
        jumps++;

        if (currentJump > currentHeight) {
            
            if (currentHeight === target) {
                console.log(`Tihomir succeeded, he jumped over ${currentHeight}cm after ${jumps} jumps.`);
                return;
            }
            
            currentHeight += 5;
            fails = 0;
        } else {
            fails++;
        }

        currentJump = Number(input[index]);
        index++;
    }

    console.log(`Tihomir failed at ${currentHeight}cm after ${jumps} jumps.`);
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
