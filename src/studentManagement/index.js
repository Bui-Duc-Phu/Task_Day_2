
const readline = require('readline-sync');

const studentController = require('./controller/StudentController');
const Student = require('./model/Student');



const searchStudentByName = () => {
    const name = readline.question("Enter student name to search: ");
    const student = studentController.searchStudentByName(name);
    if (student) {
        console.log('Found student:', student);
    } else {
        console.log("Student not found");
    }
};

const StudentStatistics = () =>{
    const students = studentController.students;
    const totalStudents = students.length;

    if (totalStudents === 0) {
        console.log("No student data available.");
    } else {
        const totalScore = students.reduce((sum, student) => sum + student.averageScore, 0);
        const averageScore = totalScore / totalStudents;

        let excellentCount = 0;
        let goodCount = 0;
        let averageCount = 0;

        students.forEach(student => {
            if (student.averageScore >= 8) {
                excellentCount++;
            } else if (student.averageScore >= 6.5) {
                goodCount++;
            } else {
                averageCount++;
            }
        });
    
        console.log("\n\n===== STUDENT STATISTICS =====");
        console.log(`Total students          : ${totalStudents}`);
        console.log(`Average score           : ${averageScore.toFixed(2)}`);
        console.log(`Excellent (>= 8)        : ${excellentCount}`);
        console.log(`Good (>= 6.5 and < 8)   : ${goodCount}`);
        console.log(`Average (< 6.5)         : ${averageCount}`);
        console.log("=============================\n");
        
    }
}


while (true) {
    console.log("\n==== MENU ====");
    console.log("1. add student"); 
    console.log("2. Show all students");
    console.log("3. Search student by name");
    console.log("4. Student Statistics");
    console.log("0. Exit");
    const choice = readline.question("Your choice: ");

    switch (choice) {
        case "0":
            console.log("Bye!");
            process.exit();
        case "1":
            studentController.addStudent(studentController.promptStudentData());
            break;
        case "2":
            console.log(studentController.students)
            break;
        case "3":
            searchStudentByName();
            break;
        case "4":
            StudentStatistics();
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}