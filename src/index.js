


const readline = require('readline-sync');

const studentController = require('./controller/StudentController');
const Student = require('./model/Student');


const addStudent = () => {
    const newStudent = new Student('SV001', 20, 8.5, 'Nguyen Van A');
    studentController.addStudent(newStudent); 
};

const GetData = () => studentController.students


while (true) {
    console.log("\n==== MENU ====");
    console.log("1. add student");
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
        default:
            console.log("Invalid choice");
    }
}
