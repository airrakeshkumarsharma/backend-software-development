const http = require("http")

http.createServer((req, res) => {
    console.log("hello");
    res.write("Hello World")
    res.end()
}).listen(5000)