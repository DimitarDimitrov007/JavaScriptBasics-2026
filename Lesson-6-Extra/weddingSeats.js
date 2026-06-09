function seats(finalSector, rowsAtFirstSector, seatsAtOdd) {
    let previousSector = "A";
    let count = 0;

    for (let a = "A".charCodeAt(0); a <= finalSector.charCodeAt(0); a++) {
        let currentSector = String.fromCharCode(a);
        
        for (let b = 1; b <= rowsAtFirstSector; b++) {
            let currentRow = Number(b);
            let seats = 0;

            if (currentRow % 2 === 0) { 
                seats = seatsAtOdd + 2;
                
            }else{
                seats = seatsAtOdd;
            }

            for(let x = "a".charCodeAt(0) ; x < ("a".charCodeAt(0) + seats) ; x ++){
                let currentSeat = String.fromCharCode(x);
                console.log(`${currentSector}${currentRow}${currentSeat}`);
                count++;
            }



        }

        rowsAtFirstSector++;
    }

    console.log(count);

}
seats("B",
    3,
    2);