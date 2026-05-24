function bookList(totalPages,pagesPerH,days){
    let hoursNeeded = totalPages / pagesPerH;
    let result = hoursNeeded / days;
    console.log(result);

}
bookList(212,20,2 );