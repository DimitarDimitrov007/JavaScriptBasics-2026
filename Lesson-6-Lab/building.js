function building(floors,roomsPerFloor){

    let currentFloor = floors;
    let allApartmentsInOne = "";
    let allOfficesInOne = "";

    while(currentFloor <= floors && currentFloor > 0){


        if(currentFloor === floors || floors === 1){
            for(let i = 0; i < roomsPerFloor ; i ++){
                let currentApartment = (`L${currentFloor}${i} `);
                allApartmentsInOne += currentApartment 

            }

            console.log(allApartmentsInOne)
            allApartmentsInOne = "";

        }else{

            if(currentFloor % 2 === 1){
            for(let i = 0 ; i < roomsPerFloor; i ++){
                 let currentApartment = (`A${currentFloor}${i} `);
                 allApartmentsInOne += currentApartment;

            }
            console.log(allApartmentsInOne);
            allApartmentsInOne = "";

        }else{
            for(let i = 0; i < roomsPerFloor; i ++){
                let currentOffice = (`O${currentFloor}${i} `);
                allOfficesInOne += currentOffice;

            }

            console.log(allOfficesInOne);
            allOfficesInOne = "";

        }


        }

        currentFloor --;

        
    }

}
building(6,4);