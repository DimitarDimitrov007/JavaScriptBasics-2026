function bollocks(a, b, maxPasswords) {

    let count = 0;
    let allPassword = "";
    let A = 35;
    let B = 64;

    for (let x = 1; x <= a; x++) {


        for (let y = 1; y <= b; y++) {

            if(A > 55){
                A = 35;

            }

            if(B > 96){
                B = 64;
            }
            let firstLetter = String.fromCharCode(A);
            let secondLetter = String.fromCharCode(B);
            let currentPassword = `${firstLetter}${secondLetter}${x}${y}${secondLetter}${firstLetter}`;
            count++;
            allPassword += currentPassword + "|";
            A++;
            B++;

            if (count >= maxPasswords) {
                console.log(allPassword);
                return;
            }

        }

    }

    console.log(allPassword);

}

bollocks(20,
    50,
    10
)