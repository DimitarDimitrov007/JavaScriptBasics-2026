function oldBooks(input){

    let anisBook = input[0];
    let booksChecked = 0;

    let currentBook = input[1];
    let index = 2;

    while(currentBook !== "No More Books"){

        if(currentBook === anisBook){
            console.log(`You checked ${booksChecked} books and found it.`);
            return;

        }

        currentBook = input[index];
        index ++;
        booksChecked += 1;

    }

    console.log("The book you search is not here!");
    console.log(`You checked ${booksChecked} books.`);

}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);
