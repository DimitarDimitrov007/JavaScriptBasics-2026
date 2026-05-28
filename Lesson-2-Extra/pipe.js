function pipe(area,pipeOne,pipeTwo,time){
    let pipeOneLites = pipeOne * time;
    let pipeTwoLites = pipeTwo * time;
    let totalLites = pipeOneLites + pipeTwoLites;

    if(totalLites > area){
        console.log(`For ${time} hours the pool overflows with ${totalLites - area} liters.`);
    }else{
        console.log(`The pool is ${(totalLites * 100) / area}% full. Pipe 1: ${((pipeOneLites * 100) / totalLites).toFixed(2)}%. Pipe 2: ${((pipeTwoLites * 100) / totalLites).toFixed(2)}%.`);
    }

}
pipe(1000,100,120,3);