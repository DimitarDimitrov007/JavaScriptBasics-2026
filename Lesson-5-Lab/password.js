function password(input){

    let name = String(input[0]);
    let password = String(input[1]);
    let currentPassword = input[2];
    let index = 3;
   

    while(currentPassword !== password){
        currentPassword = input[index];
        index ++;
        
    }
    
    console.log(`Welcome ${name}!`);

}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);