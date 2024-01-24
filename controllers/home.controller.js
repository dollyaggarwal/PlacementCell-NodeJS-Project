const Student = require('../models/student.schema');

// render home page
module.exports.homePage = async function (req, res) {
  const students = await Student.find({});
  return res.render('home', { students });
};
