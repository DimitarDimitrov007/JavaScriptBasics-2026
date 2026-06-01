function hospital(input){
    let days = Number(input[0]);
    let doctors = 7;
    let currentDay = 0;
    let treated = 0;
    let untreated = 0;

    for(let i = 1 ; i <= days ; i++){
        currentDay += 1;
        let patientsToday = Number(input[i]);


        if(currentDay % 3 === 0 &&  treated < untreated){
            doctors += 1;
        }

        if(patientsToday <= doctors){
            treated += patientsToday;

        }else if(patientsToday > doctors){
            untreated += patientsToday - doctors;
            treated += doctors;
        }
    

    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}
hospital(["4",
"7",
"27",
"9",
"1"]);
