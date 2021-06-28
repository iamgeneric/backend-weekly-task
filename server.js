// index.js
const http = require('http');
const fs = require('fs')


// declare server variables
const hostname = '127.0.0.1';
const port = 8080;


const server=http.createServer(function(req, resp) {

  resp.writeHeader (200, {'Content-Type':'text/html'});
  var readStream = fs.createReadStream('./MyPage.html', 'utf8')
  readStream.pipe(resp)
})
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
