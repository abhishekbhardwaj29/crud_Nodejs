// const fs = require("fs")
// const path = require('path')
// const dir = path.join(__dirname,'CURD')
// const filePath = `${dir}/apple.txt`

// // for create
// fs.writeFile(filePath,"this is a simple file path")

// //for read
// fs.readFile(filePath,'utf8',(err,item)=>{
//  console.log(item)
// })
// //for file inner data update
// fs.appendFile(filePath," this is updated file",(err)=>{
//     if(!err){
//         console.log('this is err')
//     }
// })

// // for file rename
// fs.rename(filePath, `${dir}/hello.txt`,(err)=>{
//     if(!err){
//         console.log('this is err')
//     }
// })

// //for file delete
// fs.unlinkSync(`${dir}/hello.txt`)