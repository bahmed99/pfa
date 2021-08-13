const express = require("express");
const router=express.Router();

const isAdmin = require("../../middleWare/requireLoginAdmin")
const isEmployee = require("../../middleWare/requireLoginEmployee")

const control = require("../../controllers/car.controllers")

router.get("/notif",control.notif);
router.patch("/check",control.reglerAnomalie);
router.patch("/addKm",control.addKm);
router.get("/all",control.getCars);
router.get("/:id",control.getCarById);
router.post("/add",control.addCar);
router.patch("/:id",control.updateCar);
router.delete("/:id",isAdmin,control.deleteCar);



module.exports=router



