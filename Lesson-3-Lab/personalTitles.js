function titles(age,sex){

    switch(sex){

        case "f" :
            if(age >= 16){
                console.log("Ms." );
            }else{
                console.log("Miss" );
            }
            break;

            case "m" : 
            if(age >= 16){
                console.log("Mr.");
            }else{
                console.log("Master");
            }
            break;
    }

}
titles(12,"f");