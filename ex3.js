const student = {
    name: "Andrew White",
    grade: 8,
    id: 1001
    
}
function foo(){
    if (student.grade>=5){
       console.log(student.name,', the student with the id',student.id, ', passed the exam with ', student["grade"])
    }else { console.log(student.name, "failed the exam")}

}

foo();