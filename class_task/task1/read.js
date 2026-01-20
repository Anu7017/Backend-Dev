const fs=require("fs");
const promisis=require("fs").promises;

//write file
fs.writeFile("./read1.txt","welcome read file by ASYNC",(err)=>{});

//read file
fs.readFile("./read1.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error ", err);
    }
    else{
        console.log(data);
    }
});
console.log("after read file");

//copy file
fs.copyFile("./read1.txt","./read2.txt",(err)=>{});

//delete file
fs.unlink("./read2.txt",(err)=>{
    if(err){
        console.log("Error h is me ", err);
    }
    else{
        console.log("file deleted ho gai tumhari");
    }
});

//read directory

fs.readdir("./",(err,files)=>{
    if(err){
        console.log("Error ", err);
    }
    else{
        console.log(files);
    }
});



