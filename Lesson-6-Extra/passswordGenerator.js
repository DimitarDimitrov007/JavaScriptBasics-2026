function generator(n, l) {
    let allPasswords = "";

    for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            for (let c = 97; c < 97 + l; c++) {
                for (let d = 97; d < 97 + l; d++) {
                    for (let e = 1; e <= n; e++) {
                        if (a >= e || b >= e) {
                            continue;

                        }
                        c = String.fromCharCode(c);
                        d = String.fromCharCode(d);

                        let currentPassword = `${a}${b}${c}${d}${e}`;

                        allPasswords += currentPassword + " ";

                        c = c.charCodeAt(0);
                        d = d.charCodeAt(0);

                    }
                }
            }
        }
    }

    console.log(allPasswords);

}
generator(2,
    4
);