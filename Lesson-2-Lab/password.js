function password(passwordEntered){
    let realPassword = "s3cr3t!P@ssw0rd" ;

    if(realPassword === passwordEntered){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }

}
password("qwerty");