const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('<h1>Hello world</h1>');
//     res.end();
// });

// server.listen(3000);

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);