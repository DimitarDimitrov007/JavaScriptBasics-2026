function cake(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let totalArea = length * width;
    let onePieceArea = 1;
    let totalPieces = totalArea / onePieceArea;
    let currentPieces = input[2];
    let index = 3;

    while(currentPieces !== "STOP"){

        currentPieces = Number(currentPieces);

        totalPieces -= currentPieces;

        if(totalPieces < 0){
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;

        }

        currentPieces = input[index];
        index++;

    }

    if(totalPieces > 0){
        console.log(`${totalPieces} pieces are left.`);
    }
   
    
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
