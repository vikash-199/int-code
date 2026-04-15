/*
🔹 1. What is fs module?
Built-in Node.js module (no installation required)
Used to interact with the file system
Works with:
Files 📄
Directories 📁
*/

const fs = require('fs');

//Synchronous(Blocking):- stop executing until opration compleated

const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

//Asychronous(callback-bassed)
fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

//Promise based(fs/promises):-morden and clean
async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//write file
/*
🔹 1. What is writeFile?
👉 writeFile is used to:
Create a new file ✅
OR overwrite an existing file ❗
📌 If file exists → content will be replaced
📌 If file does NOT exist → new file will be created
*/
fs.writeFile('data.txt', 'Hello vikash', (err) => {});

//append file:-👉 Adds data without deleting old content

fs.appendFile('data.txt', '\nNew content', (err) => {
  console.log(err);
});

//delete file

fs.unlink('data.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
