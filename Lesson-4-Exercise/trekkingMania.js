function mania(input){
    let groupsNumber = Number(input[0]);
    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let totalPeople = 0;

    for(let i = 1; i <= groupsNumber; i++){
        let peopleInGroup = Number(input[i]);
        totalPeople += peopleInGroup;

        if(peopleInGroup <= 5){
            musalaGroup += peopleInGroup;

        }else if(peopleInGroup >= 6 && peopleInGroup <= 12){
            monblanGroup += peopleInGroup;

        }else if(peopleInGroup >= 13 && peopleInGroup <=25){
            kilimanjaroGroup += peopleInGroup;

        }else if(peopleInGroup >=26 && peopleInGroup <= 40){
            k2Group += peopleInGroup;

        }else{
            everestGroup += peopleInGroup;
        }

    }

    console.log(`${((musalaGroup / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblanGroup / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroGroup/ totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2Group / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((everestGroup/ totalPeople) * 100).toFixed(2)}%`);

}
mania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);