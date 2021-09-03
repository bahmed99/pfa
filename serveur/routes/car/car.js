const express = require("express");
const router = express.Router();

const isAdmin = require("../../middleWare/requireLoginAdmin");
const isEmployee = require("../../middleWare/requireLoginEmployee");

const control = require("../../controllers/car.controllers");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads/car");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.get("/notif", control.notif);
router.get("/notifEmp",isEmployee, control.notifEmp);
router.put("/check", control.reglerAnomalie);
router.put("/addKm",isEmployee, control.addKm);
router.get("/all", control.getCars);
router.get("/:id", control.getCarById);
router.post("/add", upload.single("image"), (req, res) => {
  let car;
  console.log(req.file);
  if (req.file) {
    car = new Car({
      pic: req.file.originalname,
      model: req.body.model,
      serie: req.body.serie,
      service: req.body.service,
      mileage: req.body.mileage,
      assuranceDate: req.body.assuranceDate,
      age: req.body.age,
      technicVisitDate: req.body.technicVisitDate,
    });
  } else {
    car = new Car({
      model: req.body.model,
      serie: req.body.serie,
      service: req.body.service,
      mileage: req.body.mileage,
      assuranceDate: req.body.assuranceDate,
      age: req.body.age,
      technicVisitDate: req.body.technicVisitDate,
    });
  }
  car.save((error, car) => {
    if (error) {
      return res.status(500).send({ message: error });
    }
    return res.status(201).send({ message: "car added" });
  });
});
router.patch("/:id", control.updateCar);
router.delete("/:id", control.deleteCar);

module.exports = router;
