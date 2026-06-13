function gymnastics(country, item) {

    let score = 0;


    switch (country) {

        case "Bulgaria":
            if (item === "ribbon") {
                score += 9.600 + 9.400;

            } else if (item === "hoop") {
                score += 9.550 + 9.750;

            } else {
                score += 9.500 + 9.400;
            }

            break;

        case "Russia":
            if (item === "ribbon") {
                score += 9.100 + 9.400;

            } else if (item === "hoop") {
                score += 9.300 + 9.800;

            } else {
                score += 9.600 + 9.000;
            }

            break;

        case "Italy":
            if (item === "ribbon") {
                score += 9.200 + 9.500;

            } else if (item === "hoop") {
                score += 9.450 + 9.350;

            } else {
                score += 9.700 + 9.150;
            }

            break;
    }

    let ponitsNeeded = 20 - score;

    console.log(`The team of ${country} get ${score.toFixed(3)} on ${item}.`);
    console.log(`${((ponitsNeeded / 20) * 100).toFixed(2)}%`);

}
gymnastics("Bulgaria",
    "ribbon"
);