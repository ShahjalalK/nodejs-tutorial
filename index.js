
// const fs = require('fs')
// fs.unlink("demo.txt",  (error) => {
//     if(error){
//         console.log('error')
//     }else{
//         console.log("delete sucess full")
//     }
// } )

// const os = require('os')

// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(__dirname)
// console.log(__filename)

// const Path = require('path')

// // const extensionName = Path.extname("index.html")

// // console.log(extensionName)

// const JoinDir = Path.join(__dirname + '/../value')

// console.log(JoinDir)



// const Http = require('http')
// const port = 5000
// const hostname = '127.0.0.1'
// const serrvers =  Http.createServer((req, res) => {
//     res.writeHead(202, {'Content-Type': "text/plain"})
//     res.write('<h1>Hello Shahjalal modern<h1/>')
//     res.end()
// })
// serrvers.listen(port, hostname, () => {
//     console.log(`server is runnign successfull at ${hostname}:${port}`)
// })


// const RandomFruitsName = require('random-fruits-name')

// console.log(RandomFruitsName('ja'))

// const Http = require('http')
// const Fs = require('fs')
// const port = 5000
// const serverName = '127.0.0.1'

// const servers =  Http.createServer((req, res) => {
//     const HandelReadFile = (filename, states) => {
//         Fs.readFile(filename, (error, data) => {
//             res.writeHead(states, {'Content-Type' : 'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }
//     if(req.url === '/'){
//         HandelReadFile("index.html", 200)

//     }else if(req.url === '/about'){

//         HandelReadFile("about.html", 200)
       
//     }else if(req.url === '/contact'){
//         HandelReadFile("contact.html", 200)
//     }else{
//         HandelReadFile("error.html", 404)
//     }
    
   
// })






// servers.listen(port, serverName, () => {
//     console.log(`server name ${serverName}:${port}`)
// })


// app.get("/", (req, res) => {
//     res.send('I am get Request')
// })
// app.get("/about", (req, res) => {
//     res.send('I am About Request')
// })
// app.post('/', (req, res) => {
//     res.send('I am post Request')
// })


// const express = require('express')
// const app = express()
// const userRouter = require('./routes/user.rout')

// app.use(userRouter)
// const PORT = 3000





// app.use('/register', (req, res) => {
//     res.statusCode = 200
//     res.sendFile(__dirname+"/register.html")
// })

// app.use('/login', (req, res) => {
//     res.statusCode = 200
//     res.sendFile(__dirname + "/login.html" )
// })

// app.use('/', (req, res) => {
//     res.statusCode = 200
//     res.sendFile(__dirname + "/index.html")
    
//     res.clearCookie('name')
//     res.clearCookie('age')
   
// })

// app.use((req, res) => {
//     statusCode = 400
//     res.sendFile(__dirname + "/error.html")
// })



// app.listen(PORT, () => {

//     console.log(`Server is running localhost:${PORT}`)
// })
// const express = require('express')
// const app = express()
// const port = 3000
// const portName = '127.0.0.1'

// const userRouter = require('./routes/user.rout')
// app.use(userRouter)



// app.use('/login', (req, res) => {
//     res.statusCode = 200
//     res.sendFile(__dirname + '/login.html')
// })

// app.use('/register', (req, res) => {
//     res.statusCode = 200
//     res.sendFile(__dirname + '/register.html')
// })

// app.use('/userId/:id/userAge/:age', (req, res) => {
//  const id = req.params.id
//  const age = req.params.age
//     res.send(`${age} id is: ${id}`)
// })

// app.use((req, res) => {
//     statusCode = 400
//     res.sendFile(__dirname + "/error.html")
// })








// app.listen(port, portName, () => {
//     console.log(`Server is running ${port}:${portName}`)
// })

const express = require('express')
const app = express()
const port = 3000
const portName = '127.0.0.1'

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.post('/register', (req, res) => {
    const fullName = req.body.fullName
    const age = req.body.age
    res.send(`<h1>My name is ${fullName} and ${age} years old</h1>`)
})

app.use((req, res, next) => {
    res.send('404 Page Not Found')
    next()
})

app.listen(port, portName, () => {
    console.log(`Server is runnig ${portName}:${port}`)
})

