const express = require("express");
const router = express.Router();

const Admin = require("../../models/user/admin");
const Employee = require("../../models/user/employe");
const Car = require("../../models/car/car");

router.get("/:id", (req, res) => {
  Employee.findOne({ _id: req.params.id }).exec((err, employee) => {
    if (err || !employee) {
      Admin.findOne({ _id: req.params.id }).exec((err, admin) => {
        res.json({ user: admin, role: "admin" });
      });
    } else {
      Car.findOne({ _id: employee.car })
        .then((resul) => {
            console.log(resul)
          res.json({ user: employee, role: "employes", car: resul.status });
        })
        .catch((errs) => res.send(errs));
    }
  });
});

module.exports = router;