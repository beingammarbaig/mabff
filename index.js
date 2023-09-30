const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000
const connectToMongoDB = require("./db")
const path = require('path')


connectToMongoDB()
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors());
app.use(express.json());
app.use('/menu', require('./displaydata'));
app.use('/add', require('./addFood'));

app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*', function(_,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'), function(err){
    res.status(500).send(err);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})