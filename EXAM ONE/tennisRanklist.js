function rankList(input) {

    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let pointsWon = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        let currentStatus = input[i];

        if (currentStatus === "F") {
            pointsWon += 1200;

        } else if (currentStatus === "W") {
            pointsWon += 2000;
            wins ++;

        } else {
            pointsWon += 720;

        }
    }

    console.log(`Final points: ${points + pointsWon}`);
    console.log(`Average points: ${Math.floor(pointsWon / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);



}
rankList(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
