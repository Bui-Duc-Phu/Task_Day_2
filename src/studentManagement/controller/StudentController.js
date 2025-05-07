const fs = require('fs');
const path = require('path');
const Student = require('../model/Student');
const readline = require('readline-sync');

const studentsFilePath = path.join(__dirname, '../data', 'data.json');


let students = [];


function loadData() {
    if (fs.existsSync(studentsFilePath)) {
        const rawData = fs.readFileSync(studentsFilePath, 'utf8');
        try {
            if (rawData.trim()) {
                students = JSON.parse(rawData);
            }
        } catch (err) {
            console.error('Lỗi đọc file data.json:', err.message);
            students = [];
        }
    }
}

loadData();

function isMSSVExists(mssv) {
    return students.some(student => student.MSSV === mssv);
}

function addStudent(student) {
    if (!(student instanceof Student)) {
        throw new Error('Input must be an instance of Student');
    }
    students.push({
        MSSV: student.MSSV,
        age: student.age,
        averageScore: student.averageScore,
        name: student.name
    })
    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2), 'utf8');

    console.log(`Student ${student.name} added successfully`);
    return students;
}

const promptStudentData = () => {
    let mssv;
    while (true) {
        mssv = readline.question("Enter student MSSV: ").toUpperCase();
        if (isMSSVExists(mssv)) {
            console.log(`MSSV "${mssv}" đã tồn tại. Vui lòng nhập lại.`);
        } else {
            break;
        }
    }
    const age = readline.questionInt("Enter student age: ");
    const averageScore = readline.questionFloat("Enter student average score: ");
    const name = readline.question("Enter student name: ");

    return new Student(mssv, age, averageScore, name);
};

function searchStudentByName(name) {
    const lowerName = name.toLowerCase();
    return students.find(student => student.name.toLowerCase() === lowerName) || null;
}

module.exports = {
    students,
    addStudent,
    promptStudentData,
    searchStudentByName 
};