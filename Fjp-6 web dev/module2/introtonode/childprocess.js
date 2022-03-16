let cp =require('child_process');
// console.log(cp);
// open calculator with the help of this file
// for windows replace gnome-calculator with calc

// cp.execSync("calc");
// open vs code with childprocess
// cp.execSync("code")
let content=cp.execSync("node test.js")
console.log(""+content);