


const readline = require('readline-sync');

const studentController = require('./controller/StudentController');
const Student = require('./model/Student');


const addStudent = () => {
    const newStudent = new Student('SV001', 20, 8.5, 'Nguyen Van A');
    studentController.addStudent(newStudent); 
};


while (true) {
    console.log("\n==== MENU ====");
    console.log("1. Run test exercise2");
    console.log("0. Exit");
    const choice = readline.question("Your choice: ");

    switch (choice) {
        case "0":
            console.log("Bye!");
            process.exit();
        case "1":
            addStudent();
            break;
        default:
            console.log("Invalid choice");
    }
}
