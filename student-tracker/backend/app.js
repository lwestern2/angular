const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');
  http = require('http');

  let Student = require('../backend/model/student');
  const app = express();

  const studentRoutes = require('./routes/student.route');


mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function() {console.log("API running on localhost: " + port)});

// app.use('/add-student', studentRoutes);
// app.use('/read-student/:id', studentRoutes);
// app.use('/update-student/:id', studentRoutes);
// app.use('/students-list', studentRoutes);

app.post("/add-student", (req, res, next) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    class: req.body.class,
    gender: req.body.gender
  });

    student.save().then(createdStudent => {
        res.status(201).json({
            message: "Post added successfully!",
            studentId: createdStudent._id
        });
    });
});

app.get('/students-list', (req, res, next) => {
  Student.find().then(students => {
    res.status(200).json({
        message: 'Students fetched successfully!',
        students: students
    });
  })
  .catch(error => {
    returnError(res, error);
  });
});

app.get('/read-student/:id', (req, res, next) => {
  Student.find().then(documents => {
    res.status(200).json({
        message: 'Student fetched successfully!',
        students: documents
    });
  });
});

app.put('/update-student/:id'), ((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Student successfully updated!')
      }
    });
  });

app.delete("/delete-student/:id", (req, res, next) => { 
    Student.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({
            message: "student deleted"
        });
    });
});

module.exports = app;
