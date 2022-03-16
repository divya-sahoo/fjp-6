// "C:\Fjp-6 web dev\module2\node\path.js"
// path is a module
let path=require("path")
console.log(path);
// let extensioname=path.extname("C:\Fjp-6 web dev\module2\node\path.js");
// console.log(extensioname);
// let baseName=path.basename(__filename);
// console.log(baseName);
// console.log(__filename);
// console.log(__dirname);
let dirpath=__dirname;
console.log(dirpath);
let newfilepath=path.join(dirpath,"test.js");
console.log(newfilepath);

