function solve(input){

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = 0;
    let wins = 0;

    for(let i = 2; i <= input.length; i++){
        let result = String(input[i]);

        switch(result){
            case "F" :
                points += 1200;
                break;

            case "W" :
                points += 2000;
                wins += 1;
                break;

            case "SF" :
                points += 720;
                break;
        }

    }

    console.log(`Final points: ${startingPoints + points}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);

}
solve(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
;