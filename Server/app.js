//app.js
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());

const connectDb = require('./db/dbConnect') 
const feedback_routes = require('./routes/feedback') 

const path = require('node:path');
app.use('/feedback', feedback_routes)

const _dirname = path.resolve()

/*app.get("/" ,(req ,res ) => {
    res.send("hellow world")
});*/

app.use(express.static(path.join(_dirname, 'client', 'build')));
app.get('/' , (_ ,res) => {
  res.sendFile(path.join(_dirname, 'client', 'build', 'index.html'));
})

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

