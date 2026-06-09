function movieTickets(input){
    let currentMovieName = input[0];
    let allSeats = Number(input[1]);
    let takenSeats = 0;
    let totalTickets = 0;
    let kid = 0;
    let standard = 0;
    let student = 0;
    let isFinish = false;
    

    for(let i = 2; i < input.length; i++){
        let ticketType = input[i];

        switch(ticketType){
            case "kid" :
                kid += 1;
                totalTickets ++;
                takenSeats ++;
                break;

                case "student" :
                    student += 1;
                    totalTickets ++;
                    takenSeats ++;
                    break;


                    case "standard":
                        standard +=1;
                        totalTickets ++;
                        takenSeats ++;
                        break;

                        default :
                        if(ticketType === "Finish"){
                            console.log(`${currentMovieName} - ${((takenSeats / allSeats) * 100).toFixed(2) }% full.`)
                            isFinish = true;
                            break;


                        }else if(ticketType === "End"){
                            console.log(`${currentMovieName} - ${((takenSeats / allSeats) * 100).toFixed(2) }% full.`);
                            i++;
                            currentMovieName = input[i];
                            allSeats = Number(input[i + 1]);
                            takenSeats = 0;





                        }else{
                            console.log(`${currentMovieName} - ${((takenSeats / allSeats) * 100).toFixed(2) }% full.`);
                            currentMovieName = ticketType;
                            allSeats = Number(input[i + 1]);
                            i++;
                            takenSeats = 0;
                        }
                        break;
        }

        if(isFinish){
            break;
        }

    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
movieTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
