function dbConnect () {

    // DB connection

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commentsystem', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected..");
}).catch(function(err){
    console.log("Connection failed....(err)");
});

}

module.exports = dbConnect