const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

//Check Course Availability
MongoClient.connect('mongodb://localhost:27017') // Local MongoDB database
.then((client) => {
const db = client.db('course_register_system'); // Name of database
const courseCollection = db.collection('courses'); // Collection in the database
const courseRouter = newRouter(courseCollection); 

app.use('/api/courses', courseRouter); // Defining the base route where we can later access our data
})
.catch(console.err);

//Register
MongoClient.connect('mongodb://localhost:27017') // Local MongoDB database
  .then((client) => {
    const db = client.db('course_register_system'); // Name of database
    const resgiterCollection = db.collection('registeration'); // Collection in the database
    const registerRouter = newRouter(resgiterCollection); 
  
    app.use('/api/registeration', registerRouter); // Defining the base route where we can later access our data
  })
  .catch(console.err);


app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});