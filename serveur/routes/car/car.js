const express = require("express");
const router=express.Router();

const isAdmin = require("../../middleWare/requireLoginAdmin")
const isEmployee = require("../../middleWare/requireLoginEmployee")

const control = require("../../controllers/car.controllers")

router.get("/all", isAdmin,isEmployee,control.getCars)
router.post("/add",isAdmin,control.addCar)
router.patch("/:id",control.updateCar)
router.delete("/:id",isAdmin,control.deleteCar)



module.exports=router



