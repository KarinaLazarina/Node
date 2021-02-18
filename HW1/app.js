//1
// Посортувати юзерів по папках.
// У вас є дві папки. 1800 та 2000. В кожній з цих папок є файлики
// аля Karina.txt в якому міститься {"gender": "female"}
// Oleg.txt в якому міститься {"gender": "male"}
// Вам потрібно перемістити всіх дівчат на 1800 а хлопців на 2000.
const fs = require('fs');

function sortUsers(filePath, fileName, gend, time){

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let str = data.toString();
        let json = JSON.parse(str);
        if (json.gender === gend){
            fs.rename(filePath, `${__dirname}/${time}/${fileName}`, err => {
                if (err) {
                    console.log(err);
                }
            });
        }
    })
}
const dirName18 = __dirname + '/1800';
const dirName20 = __dirname + '/2000';

fs.readdir(dirName18, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(fileName => {
        sortUsers(`${dirName18}/${fileName}`,fileName, 'male', '2000')
    })
});
fs.readdir(dirName20, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(fileName => {
        sortUsers(`${dirName20}/${fileName}`,fileName, 'female', '1800');
    })
});
