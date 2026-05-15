function gradeCalculation(mark){
    switch(true)
    {
        case mark>=90 && mark<=100:
            console.log("Student Grade: A")
            break
        case mark>=80 && mark<90:
            console.log("Student Grade: B")
            break
        case mark>=65 && mark<80:
            console.log("Student Grade: C")
            break
        case mark>=50 && mark<65:
            console.log("Student Grade: D")
            break
        case mark>=35 && mark<50:
            console.log("Student Grade: E")
            break
        case mark<35:
            console.log("Student Grade: FAIL")
            break
        default :
            console.log("Invalid Score!, Please enter valid score.")
    }
}
gradeCalculation(85)