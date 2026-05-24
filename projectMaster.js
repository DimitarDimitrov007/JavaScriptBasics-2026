function projectMaster(name,projects){
    let timeForSingleProject = 3;
    let totalTime = Number(projects) * timeForSingleProject
    console.log(`The architect ${name} will need ${totalTime} hours to complete ${projects} project/s.`);

}
projectMaster("George",4);