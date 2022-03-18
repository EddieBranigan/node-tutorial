const http = require('http')
const server = http.createServer( (request, response) => {
    if (request.url === '/') {
        response.end('<h1>Eddie\'s Node.js test Server</h1>')
    } else if (request.url === '/about') {
        response.end('<h1>Here is our about page</h1>')
    } else {     response.end(`
    <h1>Oops!</h1>
    <p>The requested resource you are looking for doesn't exist!</p>
    <p><a href="/">Go Back Home</a> `)}
})

server.listen(5000)