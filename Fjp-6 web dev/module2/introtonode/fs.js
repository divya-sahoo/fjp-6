let fs=require("fs")
// console.log(fs)
// let path=require("path")
// let filepath=path.join(__dirname,"file.text");
// // console.log(filepath);

// // it creates file if it does not exist else it overwrite
// fs.writeFileSync(filepath,"again writing on existing on file");
// console.log("before update");
// let content=fs.readFileSync(filepath,'utf-8');
// console.log(content);


// // u-update
// fs.appendFileSync(filepath," newly added content");
// console.log('after update');
// console.log(fs.readFileSync(filepath,'utf-8'));
// // delete
// fs.unlinkSync(filepath);  
// create a directory
if(!fs.existsSync("hamaridirectory"))
fs.mkdirSync("hamaridirectory");
// read a directory
let folderpath=__dirname;
let contentOfFolder=fs.readdirSync(folderpath);
console.log(contentOfFolder);
// delete a directory
fs.rmdirSync("hamaridirectory")
// copy a file
let sourcePath= path.join(__dirname,"file.txt")
let destinationpath=path.join(__dirname,"module","file.txt")
console.log(sourcePath);
fs.copyFileSync(sourcePath,destinationpath);
