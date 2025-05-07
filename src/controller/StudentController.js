const fs = require('fs');
const path = require('path');
const Student = require('../model/Student');

const studentsFilePath = path.join(__dirname, '../data', 'data.json');

let students = [];

if (fs.existsSync(studentsFilePath)) {
    const rawData = fs.readFileSync(studentsFilePath, 'utf8');

    // Kiểm tra xem dữ liệu có hợp lệ không
    try {
        if (rawData.trim()) {
            students = JSON.parse(rawData);
        }
    } catch (err) {
        console.error('❌ Lỗi đọc file data.json:', err.message);
        // Nếu lỗi, đặt lại danh sách sinh viên rỗng
        students = [];
    }
}

function addStudent(student) {
    if (!(student instanceof Student)) {
        throw new Error('Input must be an instance of Student');
    }

    students.push(student);

    // Ghi lại vào file JSON
    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2), 'utf8');

    console.log(`✅ Student ${student.name} added successfully`);
    return students;
}

module.exports = { students, addStudent };
