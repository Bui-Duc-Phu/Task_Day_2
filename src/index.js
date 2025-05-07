


const readline = require('readline-sync');

const studentController = require('./controller/StudentController');
const Student = require('./model/Student');


const addStudent = () => {
    const newStudent = new Student('SV001', 20, 8.5, 'Nguyen Van A');
    studentController.addStudent(newStudent); 
};

const GetData = () => studentController.students

const searchStudentByName = (name) => {
    const student = studentController.students.find(student => student.name === name);
    if (student) {
        return student; 
    } else {
        return null;
    }
};



while (true) {
    console.log("\n==== MENU ====");
    console.log("1. add student");
    console.log("2. get data");
    console.log("3. Search student by name");
    console.log("0. Exit");
    const choice = readline.question("Your choice: ");

    switch (choice) {
        case "0":
            console.log("Bye!");
            process.exit();
        case "1":
           console.log(addStudent())
            break;
        case "2":
            console.log(GetData())
            break;
        case "3":
            const name = readline.question("Enter student name to search: ");
            const student = searchStudentByName(name);
            if (student) {
                console.log(`Found student: ${JSON.stringify(student)}`);
            } else {
                console.log("Student not found");
            }
            break;
        default:
            console.log("Invalid choice");
    }
}
