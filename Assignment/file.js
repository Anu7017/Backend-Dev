const fs=require('fs');     //importing fs module
const promises=require("fs").promises;  //importing fs promises module



//---> write file
// create file with SYNC  

fs.writeFileSync("./file.txt","welcome to Node.js file system module");

//Async
fs.writeFile("./file.txt","welocom to gla",(err)=>{});


//---> read file

//SYNC
const result=fs.readFileSync("./note.txt","utf8");
console.log(result);

//Async
fs.readFile("./note.txt","utf8",(err,result)=>{
    if(err){
        console.log("Error ", err);
    }
    else{
        console.log(result);
    }

});

fs.appendFileSync("./file.txt",new Date().getDate().toLocaleString());   //append data to file

//---> copy file
fs.copyFileSync("./file.txt","./file2.txt");


//---> delete file
fs.unlinkSync("./file2.txt");

console.log(fs.statSync("./file.txt"));   //file info

//create directory

fs.mkdirSync("./newfolder/1folder/2folder",{recursive:true});  //recursive:true creates parent folder if not present

//delete directory
fs.rmdirSync("./newfolder");  //recursive:true deletes non empty folder


//blocking vs non blocking

//blocking
// const data=fs.readFileSync("note.txt","utf8");
// console.log(data);
// console.log("after read file");

//non blocking
// fs.readFile("note.txt","utf8",(err,data)=>{
//     console.log(data);
// });
// console.log("after read file");