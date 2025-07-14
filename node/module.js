// // 1- os file module
// const os = module.require("os")

// const userInfo = os.userInfo()

// console.log(userInfo);

// // system uptime 
// console.log(`the system uptime is ${os.uptime()} in seconds`);

// // 2 - path file module

// const path = require("path")

// console.log(path.sep);

// const filePath = path.join('/content' , '/sub-folder' , 'test.txt')

// console.log(filePath);


// const base = path.basename(filePath);

// console.log(base);

// const absolute = path.resolve(__dirname , 'content' , 'sub-folder' , 'test.txt')

// console.log(absolute);

// // 3- fs file module

// const {readFileSync , writeFileSync} = require('fs')


// const firstFile = readFileSync('.././content/first.txt' , "utf8")
// const secondFile = readFileSync('.././content/second.txt' , "utf8")

// console.log(firstFile , secondFile);


// writeFileSync('.././content/third-result' , `here is result of write sync builtin module ${firstFile} ${secondFile}`)

// // async fs module

const {readFile , writeFile} = require("fs")

readFile(".././content/first.txt" ,'utf8' ,  (err , rslt ) => {
    if(err) {
        console.log('the error ==>' , err);
        return; 
    }
    console.log(rslt);
    const first = rslt
    readFile(".././content/second.txt" ,'utf8' ,  (err , rslt ) => {
    if(err) {
        console.log('the error ==>' , err);
        return; 
    }
    
    console.log(rslt);
    
})
const second = rslt
writeFile('.././content/result-async.txt' , 
`here is result of write sync builtin module ${first} ${second}`
, (err , rslt) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(rslt);
    
})
})



