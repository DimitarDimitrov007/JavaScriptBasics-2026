function moving(input){

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let area = width * length * height;
    let boxArea = 1;
    let maxBoxes = area / boxArea;
    let currentBoxes = input[3];
    index = 4;


    while(currentBoxes !== "Done"){

        currentBoxes = Number(currentBoxes);

        maxBoxes -= currentBoxes;

        if(maxBoxes < 0){
            console.log(`No more free space! You need ${Math.abs(maxBoxes)} Cubic meters more.`);
            break;

        }

        currentBoxes = input[index];
        index ++;
    }

    if(maxBoxes > 0){
        console.log(`${maxBoxes} Cubic meters left.`);

    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);
