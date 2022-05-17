const http = require('http');

const server = http.createServer(function (req, res) {


var fs = requiert('fs')  
       
var contenu = fs.readFileSync(process.argv[2])  
var lignes = contents.toString().split('\n').length - 1  
console.log(lignes)
})
server.listen(5000, ()=>{
   console.log("the server is running")
 });