const express = require('express');
const studentRoute = express.Router();

let Student = require('../model/student');


// studentRoute.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, 'dist/cms/index.html'));
// });

// studentRoute.route('/add-student').post((req, res, next) => {
//     Student.save().then(createdStudent => {
//       res.status(201).json({
//           message: "Post added successfully!",
//           studentId: createdStudent._id
//       });
//   })
// });

// studentRoute.route('/students-list').get((req, res) => {
//   Student.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// studentRoute.route('/read-student/:id').get((req, res) => {
//   Student.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// studentRoute.route('/update-student/:id').put((req, res, next) => {
//   Student.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student successfully updated!')
//     }
//   })
// })

// studentRoute.route('/delete-student/:id').delete((req, res, next) => {
//   Student.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = studentRoute;