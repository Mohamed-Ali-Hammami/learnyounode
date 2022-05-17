const http = require('http');

const server = http.createServer((req, res) => {

const a = Number(process.argv[2])
const b = +process.argv[3]



        console.log('The sum is of ${a} and ${b} is ${(a+b)}');
  
})

