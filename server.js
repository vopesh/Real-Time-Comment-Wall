const express = require('express')
const app = express()



const port = process.env.PORT || 3000

app.use(express.static('public'))  // menton the static folder, in this case is public


// db.js file - dbConnect access

const dbConnect = require('./db.js')
dbConnect()

const Comment = require('./model/comment')  // this is the model we created in comment.js file in model folder
const { response } = require('express')

// let express know the type of data we have
app.use(express.json())




// Routes . 'api/comments' api calles in index.js
//post
app.post('/api/comments', (req, res) => {
    const comment = new Comment({
        username : req.body.username,
        comment : req.body.comment
    })
    comment.save().then(response => {
        res.send(response) // send this to client end
    })  // this is promise and it's asynchronous
})


// get

app.get('/api/comments', (req, res) => {
    Comment.find().then(function(comments){
        res.send(comments)
    })
})





// listen server

const server = app.listen(port, () => {
    console.log(`listening at port ${port}`)
})












const io = require('socket.io')(server)

io.on('connection', (socket) => {
    // console.log(`New connection: ${socket.id}`) // stablish connection from client

    // receive event from client (index.js)
    socket.on('comment', (data) => {  // comment is the parameter we define in index.js (boradcastComment function)
        //console.log(data)

        // now all sockets connected to the app will see the comments by this logic
        data.time = Date()
        socket.broadcast.emit('comment', data)

    })

    //receive typing event when someeonw typing

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})


