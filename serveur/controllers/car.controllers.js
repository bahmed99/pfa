const Car = require("../models/car/car");


exports.addCar = (req, res) => {
    const car = new Car({
        model: req.body.model,
        serie: req.body.serie,
        service: req.body.service,
        mileage: req.body.mileage,
        assuranceDate: req.body.assuranceDate,
        age: req.body.age,
        technicVisitDate: req.body.technicVisitDate,

    });
    car.save((error, car) => {
        if (error) {
            return res.status(500).send({ message: error });
        }
        return res.status(201).send({ message: "car added" })
    });
    this.anomali();
};
exports.deleteCar = (req, res) => {
    Car.deleteOne({
        _id: req.params.id
    }).exec()
        .then(() => {
            return res.status(200).send({ message: "Car deleted" });
        }).catch(error => {
            console.log(error);
            return res.status(500).send({ message: error });
        });
};
exports.updateCar = (req, res) => {
    Car.updateOne({ _id: req.params.id }, {
        pic: req.body.pic,
        model: req.body.model,
        serie: req.body.serie,
        service: req.body.service,
        mileage: req.body.mileage,
        assuranceDate: req.body.assuranceDate,
        age: req.body.age,
        technicVisitDate: req.body.technicVisitDate,
    }).then(() => {
        return res.status(200).send({ message: "Car updated" });
    }).catch(err => {
        console.log(err);
        return res.status(304).send({ message: error });
    });
};

exports.getCars = (req, res) => {
    var dateFormat = require("dateformat");
    Car.find().exec()
        .then(cars => {
            if (!cars) {
                return res.status(404).send({ message: "No cars found" });
            }
            const response = [];
            cars.forEach((car) => {
                response.push({
<<<<<<< HEAD
                    pic: car.pic,
                    model: car.model,
                    serie: car.serie,
                    service: car.service,
                    mileage: car.mileage,
                    assuranceDate: dateFormat(car.assuranceDate, "dd/mm/yyyy"),
                    age: car.age,
                    technicVisitDate: dateFormat(car.technicVisitDate, "dd/mm/yyyy"),
                });
            })
            return res.status(200).send(response);
        }).catch(err => {
            return res.status(500).send({ message: err });
        });
};
exports.getCarById = (req, res) => {
    Car.findById({ _id: req.params.id })
        .then(car => {
            if (!car) {
                return res.status(404).send({ message: "No car found" });
            }
            const response = [];
            cars.forEach((car) => {
                response.push({
                    pic: car.pic,
                    serie: car.serie,
                    service: car.service,
                    mileage: car.mileage,
                    assuranceDate: dateFormat(car.assuranceDate, "dd/mm/yyyy"),
                    age: car.age,
                    technicVisitDate: dateFormat(car.technicVisitDate, "dd/mm/yyyy"),
=======
                    _id:car._id ,
                    serie:car.serie,
                    service:car.service,
                    mileage:car.mileage,
                    assuranceDate:car.assuranceDate,
                    age:car.age,
                    technicVisitDate:car.technicVisitDate,
>>>>>>> 1d5437d6be5822f38da76003110e825b23977c82
                });
            });
            return res.status(200).send(response);
        }).catch(err => {
            return res.status(500).send({ message: err });
        });
};

exports.addKm = (req, res) =>{
    Car.updateOne({_id: req.body.carId},  { $inc: {dernierVidange: 40, mileage:40}})
    .then((result)=>{
        return res.status(200).send("Updated");
    }).catch((err)=>{
        return res.status(500).send({error: err});
    })
}


exports.reglerAnomalie = (req, res) => {
    if (req.body.item == "assurance") {
        Car.updateOne({ _id: req.body.carId }, { assuranceDate: req.body.assuranceDate, assurance: true })
            .then((result)=>{
                return res.status(200).send("Updated")
            })
            .catch((err) => {
                return res.status(500).send({ error: err })
            });
    }
    if (req.body.item == "technicVisit") {
        Car.updateOne({ _id: req.body.carId }, { technicVisitDate: req.body.technicVisitDate, technicVisit: true })
            .then((result)=>{
                return res.status(200).send("Updated")
            })
            .catch((err) => {
                return res.status(500).send({ error: err })
            });
    }

    if (req.body.item == "vignette") {
        Car.updateOne({ _id: req.body.carId }, { $inc: {vignetteYear: 1}, vignette: true })
            .then((result)=>{
                return res.status(200).send("Updated")
            })
            .catch((err) => {
                return res.status(500).send({ error: err })
            });
    }

    if (req.body.item == "entretien") {
        Car.updateOne({ _id: req.body.carId }, {dernierVidange: 0, entretien: true})
            .then((result)=>{
                return res.status(200).send("Updated")
            })
            .catch((err) => {
                return res.status(500).send({ error: err })
            });
    }
};

exports.anomali = (req, res) => {
    Car.find().exec()
        .then((cars) => {
            const date = new Date();
            cars.forEach((car) => {
                if (car.assuranceDate < date) {
                    console.log(car._id);
                    Car.updateOne({ _id: car._id }, { assurance: false }).then().catch(err => {
                        return res.status(304).send({ message: error });
                    });
                }
                if (car.technicVisitDate < date) {
                    Car.updateOne({ _id: car._id }, { technicVisit: false }).then().catch(err => {
                        return res.status(304).send({ message: error });
                    });
                }
                const num = car.serie.split('Tu')[0];
                if (num % 2 == 0 && date.getMonth() > 3 && date.getFullYear() > parseInt(car.vignetteYear) ) {
                    Car.updateOne({ _id: car._id }, { vignette: false }).then().catch(err => {
                        return res.status(304).send({ message: error });
                    });
                }
                if (num % 2 != 0 && date.getMonth() > 2 && date.getFullYear() > parseInt(car.vignetteYear)) {
                    Car.updateOne({ _id: car._id }, { vignette: false }).then().catch(err => {
                        return res.status(304).send({ message: error });
                    });
                }
                if(car.dernierVidange>10000){
                    Car.updateOne({ _id: car._id }, { entretien: false }).then().catch(err => {
                        return res.status(304).send({ message: error });
                    });
                }
            });
        }
        );
}

exports.notif = (req, res) => {
    this.anomali();
    Car.find().exec()
        .then((cars) => {
            const result = []
            cars.forEach((car) => {
                if (car.assurance == false || car.technicVisit == false || car.vignette == false || car.entretien == false) {
                    result.push({
                        pic: car.pic,
                        serie: car.serie,
                        assurance: car.assurance,
                        technicVisit: car.technicVisit,
                        vignette: car.vignette,
                        entretien: car.entretien
                    });
                }
            });
            return res.status(200).send(result);
        }).catch(err => {
            return res.status(500).send({ error: err });
        });
}