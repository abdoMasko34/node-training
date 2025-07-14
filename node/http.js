const http = require("http")
const routers = {
    home: "/",
    about: "/about"
}
const server = http.createServer((req , res) => {
    if(req.url === routers.home) {
        res.write("welcome to the home page")
    }
      if(req.url === routers.about) {
        res.write("about us this info contain history about us")
    }

        res.end(`
            <h1>Oops !</h1>
            <p>we cant seem to find the page you are looking for</p>
            <a href="/">back to home page 1</a>
            `)
            
    
})

server.listen(3000)