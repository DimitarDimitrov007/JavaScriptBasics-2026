function words(input){

    let index = 0;
    let currentWord = input[index];
    index ++;
    
    while(currentWord !== "Stop"){
        console.log(currentWord);
        currentWord = input[index];
        index++;
    }

}
words(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);
