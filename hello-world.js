const http = require('http');

const server = http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("first")
  res.end('<h2>Hello World!</h2>');
  console.log(req.url)
  
})

server.listen(5000, ()=>{
  console.log("the server is running")
});