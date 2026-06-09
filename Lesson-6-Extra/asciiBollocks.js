function bollocks(a, b, maxPasswords) {

    let count = 0;
    let allPassword = "";

    for (let A = 35; A <= 55; A++) {
        for (let B = 64; B <= 96; B++) {


            for (let x = 1; x <= a; x++) {


                for (let y = 1; y <= b; y++) {
                    let firstLetter = String.fromCharCode(A);
                    let secondLetter = String.fromCharCode(B);
                    let currentPassword = `${firstLetter}${secondLetter}${x}${y}${secondLetter}${firstLetter}`;
                    allPassword += currentPassword + "|";
                    A++;
                    B++;


                }

                if (x === a) {
                    break;
                }
            }
        }
    }

    console.log(allPassword);

}

bollocks(2,
    3,
    10);