function grades(input){

    let totalStudents = Number(input[0]);
    let sumOfGrades = 0;
    let typeOneGrades = 0;
    let typeTwoGrades = 0;
    let typeThreeGrades = 0;
    let typeFourGrades = 0;

    for(let i = 1; i < input.length; i++){
        let currentGrade = Number(input[i]);
        sumOfGrades += currentGrade;

        if(currentGrade >= 2 && currentGrade <=2.99){
            typeOneGrades += 1;

        }else if(currentGrade >= 3 && currentGrade <= 3.99){
            typeTwoGrades += 1;

        }else if(currentGrade >= 4 && currentGrade <= 4.99){
            typeThreeGrades += 1;

        }else{
            typeFourGrades += 1;
        }

    }

    console.log(`Top students: ${((typeFourGrades / totalStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((typeThreeGrades / totalStudents) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((typeTwoGrades / totalStudents) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((typeOneGrades / totalStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumOfGrades / totalStudents).toFixed(2)}`);
}
grades([6,
2,
3,
4,
5,
6,
2.2]);