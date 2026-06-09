function wedding(men, women, tables) {
    let freeTables = Number(tables);
    let allMeetings = "";
    let isFull = false;
    let tablesTaken = 0;



    for (let m = 1; m <= men; m++) {
        for (let w = 1; w <= women; w++) {
            if (tablesTaken >= tables) {
                isFull = true;
                break;

            } else {
                let currentMeeting = String(`(${m} <-> ${w}) `);
                allMeetings += currentMeeting;
                tablesTaken++;


            }

        }

        if (isFull) {
            break;
        }
    }

    console.log(allMeetings);

}
wedding(2, 2, 6);