const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000
const connectToMongoDB = require("./db")
const path = require('path')



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors());
app.use(express.json());
app.use('/menu', require('./displaydata'));
app.use('/add', require('./addFood'));
app.use('/add', require('./addContact'));
app.use('/add', require('./addReservation'));

app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*', function(_,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'), function(err){
    res.status(500).send(err);
    console.log(err)
  })
})
connectToMongoDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})