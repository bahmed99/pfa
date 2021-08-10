const Car = require("../models/car/car");

exports.addCar = (req, res) => {
    const car = new Car({
        model:req.body.model,
        serie:req.body.serie,
        service:req.body.service,
        mileage:req.body.mileage,
        assuranceDate:req.body.assuranceDate,
        age:req.body.age,
        technicVisitDate:req.body.technicVisitDate,

    });
    car.save((error, car) => {
        if (error) {
            return res.status(500).send({ message: error });
        }
        return res.status(201).send({ message: "car added" })
    });
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
        model:req.body.model,
        serie:req.body.serie,
        service:req.body.service,
        mileage:req.body.mileage,
        assuranceDate:req.body.assuranceDate,
        age:req.body.age,
        technicVisitDate:req.body.technicVisitDate,
    }).then(() => {
        return res.status(200).send({ message: "Car updated" });
    }).catch(err => {
        console.log(err);
        return res.status(304).send({ message: error });
    });
};

exports.getCars = (req, res) => {
    Car.find().exec()
        .then(cars => {
            if (!cars) {
                return res.status(404).send({ message: "No cars found" });
            }
            const response = [];
            cars.forEach((car) => {
                response.push({
                    _id:car._id ,
                    serie:car.serie,
                    service:car.service,
                    mileage:car.mileage,
                    assuranceDate:car.assuranceDate,
                    age:car.age,
                    technicVisitDate:car.technicVisitDate,
                });
            });
            return res.status(200).send(response);
        }).catch(err => {
            return res.status(500).send({ message: err });
        });
};