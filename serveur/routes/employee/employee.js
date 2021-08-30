
const express = require("express");
const router = express.Router();
const Employee = require("../../models/user/employe");
const Client = require("../../models/user/client");
const Message = require("../../models/message/message");
const Car = require("../../models/car/car");
const requireLoginEmployee = require("../../middleware/requireLoginEmployee");
const requireLoginAdmin = require("../../middleware/requireLoginAdmin");
const fs = require("fs");
const Avis = require("../../models/avis/avis");
const multer = require("multer");

const User = require("../../models/user/userRequest");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads/cours");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/AjouterCours",
  requireLoginEmployee,
  requireLoginAdmin,
  upload.single("file"),
  (req, res) => {
    const { nom } = req.body;
    var data = fs.readFileSync("../client/src/data/cours.json");
    var myObject = JSON.parse(data);
    let newData = {
      nom: nom,
      file: req.file.originalname,
      id: myObject.length + 1,
    };
    myObject.push(newData);
    var newData2 = JSON.stringify(myObject);
    fs.writeFile("../client/src/data/cours.json", newData2, (err) => {
      if (err) throw err;
      res.json("New data added");
    });
  }
);

router.get("/emplois", requireLoginEmployee, (req, res) => {
  res.status(200).send(req.employee.timetable);
});

router.put("/emplois", requireLoginEmployee, (req, res) => {
  Employee.findByIdAndUpdate(
    req.employee._id,
    {
      $push: { timetable: req.body },
    },
    {
      new: true,
    }
  )
    .then((result) => {
      Client.findByIdAndUpdate(
        req.body.client,
        {
          $push: {
            timetable: {
              start: req.body.start,
              end: req.body.end,
              title: req.body.title,
              color: req.body.color,
              eventContent: req.body.eventContent,
            },
          },
        },
        {
          new: true,
        }
      )
        .then((resultat) => {
          Client.findByIdAndUpdate(
            req.body.client,
            {
              $push: {
                notifications: {
                  title: `${req.body.title} a été ajouté`,
                  nom: req.employee.name,
                  pic: req.employee.pic,
                },
              },
            },
            {
              new: true,
            }
          ).then((not) => {
            Car.findByIdAndUpdate(result.car, {
              $push: {
                timetable: {
                  start: req.body.start,
                  end: req.body.end,
                  title: req.body.title,
                  color: req.body.color,
                  eventContent: req.body.eventContent,
                },
              },
            })
              .then((car) => {
                Client.findOne({ _id: req.body.client })
                  .then((count) => {
                    if (req.body.title === "Séance code") {
                      count.seanceCode = count.seanceCode + 1;
                      count.montantAPaye= count.montantAPaye+8
                    }
                    if (req.body.title === "Séance conduite") {
                      count.seancePermis += 1;
                      count.montantAPaye= count.montantAPaye+25
                    }
                    count
                      .save()
                      .then((r) => {
                        res.status(200).send(count);
                      })
                      .catch((errreur) => {
                        res.send({ erreur: errreur });
                      });
                  })
                  .catch((errreur) => {
                    res.send({ erreur: errreur });
                  });
              })
              .catch((errreur) => {
                res.send({ erreur: errreur });
              });
          });
        })
        .catch((errs) => {
          res.status(400).send(errs);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/clients", requireLoginEmployee, (req, res) => {
  Client.find({
    _id: { $in: req.employee.client },
  })
    .then((resultat) => {
      res.status(200).send(JSON.stringify(resultat));
    })
    .catch((erreur) => {
      res.status(400).send(erreur);
    });
});

router.get("/car", requireLoginEmployee, (req, res) => {

    Car.findOne({ _id: req.employee.car })
    .then(resultat => {
     console.log(resultat)
      return  res.status(200).send(JSON.stringify(resultat))
       
    }).catch(erreur => {
       return res.status(400).send(erreur)
    })
    
})


router.get("/employee-clients", requireLoginEmployee, (req, res) => {
  const data = [];
  Employee.findOne({ _id: req.employee._id })
    .populate("client", "_id name cin email pic tel age status")
    .then((result) => {
      for (let i = 0; i < result.client.length; i++) {
        data.push({
          id: result.client[i]._id,
          name: result.client[i].name,
          email: result.client[i].email,
          cin: result.client[i].cin,
          imgUrl: result.client[i].pic,
          tel: result.client[i].tel,
          status: result.client[i].status,
          age: result.client[i].age,
        });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/employee-client/:id", requireLoginEmployee, (req, res) => {
  Client.findOne({ _id: req.params.id })
    .then((result) => {
      Message.findOne({ client: req.params.id }).then((result1) => {
        res.json({ result1, result });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/emplois/:id", requireLoginEmployee, (req, res) => {
  Client.findById(req.params.id)
    .then((result) => {
      res.status(200).send(JSON.stringify(result.timetable));
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put("/emplois-delete/:id", requireLoginEmployee, (req, res) => {
  const data = req.body;

  console.log(data);

  Employee.findByIdAndUpdate(
    req.employee._id,
    {
      $pull: { timetable: data },
    },
    {
      new: true,
    }
  ).then((resultat) => {
    Client.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { timetable: data },
      },
      {
        new: true,
      }
    )
      .then((result) => {
        Car.findByIdAndUpdate(
          resultat.car,
          {
            $pull: { timetable: data },
          },
          {
            new: true,
          }
        )
          .then((results) => {
            Client.findByIdAndUpdate(
              req.params.id,
              {
                $push: {
                  notifications: {
                    title: `${req.body.title} a été supprimé`,
                    nom: req.employee.name,
                    pic: req.employee.pic,
                  },
                },
              },
              {
                new: true,
              }
            )
              .then((r) => {
                Client.findOne({ _id: req.params.id }).then((count) => {
                  console.log(count);
                  if (req.body.title === "Séance code") {
                    count.seanceCode = count.seanceCode - 1;
                  }
                  if (req.body.title === "Séance conduite") {
                    count.seancePermis -= 1;
                  }
                  count.save().then((final) => {
                    res.send(final);
                  });
                });
              })
              .catch((e) => {
                res.send(e);
              });
          })
          .catch((errs) => {
            res.send(errs);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  });
});

router.delete("/deleteClient/:id", requireLoginEmployee, (req, res) => {
  Client.findOne({ _id: req.params.id }).exec((err, client) => {
    if (err || !client) {
      return res.status(422).json({ error: err });
    }
    fs.unlink(
      `../client/public/uploads/profile/clients/${client.pic}`,
      function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      }
    );

    Employee.findByIdAndUpdate(
      req.employee._id,
      {
        $pull: { client: req.params.id },
      },
      {
        new: true,
      }
    )
      .then((supp) => {
          Employee.update(
           { _id:req.employee._id},
            {
              $pull: {
                timetable: {
                  client:{ $in:[req.params.id]}
                }
              }
            }
          ).then(rep=>{
            client.remove();
            res.send(supp);
          })
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.put("/updateClient/:id", requireLoginEmployee, (req, res) => {
  const { name, email, cin, pic, tel, age } = req.body;
  if (!name || !email || !cin || !pic || !tel || !age) {
    return res.status(422).json({ error: "please add all fields" });
  }
  Client.findOne({ _id: req.params.id })
    .then((result) => {
      result.name = name;
      result.email = email;
      result.cin = cin;
      result.pic = pic;
      result.tel = tel;
      result.age = age;
      result.save().then((result1) => {
        res.json({ message: "saved successfully" });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/updateEmploye", requireLoginEmployee, (req, res) => {
  const { name, email, cin, tel, age } = req.body;
  if (!name || !email || !cin || !tel || !age) {
    return res.status(422).json({ error: "please add all fields" });
  }
  Employee.findOne({ _id: req.employee._id })
    .then((result) => {
      result.name = name;
      result.email = email;
      result.cin = cin;
      result.tel = tel;
      result.age = age;
      result.save().then((result1) => {
        res.json({ message: "saved successfully" });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/updateStatus/:id", (req, res) => {
  Client.findOne({ _id: req.params.id })
    .then((result) => {
      if (result.status === "Payé") {
        result.status = "Non payé";
      } else {
        result.status = "Payé";
      }
      result.save().then((r) => {
        res.json(r.status);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

/////////////
function getweek() {
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first));
  var lastday = new Date(curr.setDate(last));
  return [firstday, lastday];
}

function nombreSeance(data) {
  let nb = 0;
  var curr = new Date();
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].start.getFullYear() === new Date().getFullYear() &&
      data[i].start.getMonth() === new Date().getMonth() &&
      data[i].start.getDate() === curr.getDate()
    ) {
      nb++;
    }
  }
  return nb;
}

router.get("/statistics", requireLoginEmployee, (req, res) => {
  Client.find({
    _id: { $in: req.employee.client },
  })
    .then((resultat) => {
      Car.findOne({ _id: req.employee.car })
        .then((resu) => {
          let etat;
          if (resu.status === "1") {
            etat = "En service";
          } else {
            etat = "Hors service";
          }
          res.status(200).send(
            JSON.stringify({
              client: resultat.length,
              emplois: nombreSeance(req.employee.timetable),
              car: etat,
            })
          );
        })
        .catch((erreurs) => {
          res.status(400).send(erreurs);
        });
    })
    .catch((erreur) => {
      res.status(400).send(erreur);
    });
});

router.get("/nbrSeances", requireLoginEmployee, (req, res) => {
  const [fd, ff] = getweek();
  const tab1 = ["L", "M", "M", "J", "V", "S", "D"];
  let tab = [0, 0, 0, 0, 0, 0, 0];

  for (let j = 0; j < req.employee.timetable.length; j++) {
    if (
      req.employee.timetable[j].start.getFullYear() ===
        new Date().getFullYear() &&
      req.employee.timetable[j].start.getMonth() === new Date().getMonth() &&
      req.employee.timetable[j].start.getDate() >= fd.getDate() &&
      req.employee.timetable[j].start.getDate() <= ff.getDate()
    ) {
      if (req.employee.timetable[j].start.getDay() === 0) {
        tab[6] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 1) {
        tab[0] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 2) {
        tab[1] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 3) {
        tab[2] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 4) {
        tab[3] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 5) {
        tab[4] += 1;
      } else if (req.employee.timetable[j].start.getDay() === 6) {
        tab[5] += 1;
      }
    }
  }

  res.json({ labels: tab1, series: [tab] });
});

router.get("/nbreSub", requireLoginEmployee, (req, res) => {
  let tab1 = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aôut",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  Client.find({
    _id: { $in: req.employee.client },
  }).then((result) => {
    let tab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < 12; j++) {
        if (result[i].createdAt.getMonth() === j) {
          tab[j] = tab[j] + 1;
        }
      }
    }
    res.json({ labels: tab1, series: [tab] });
  });
});

router.get("/repartitionAvis", requireLoginEmployee, (req, res) => {
  let labels = ["🤬", "🙁", "😶", "😁", "😍"];
  Avis.find().then((result) => {
    let datasets = [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["red", "tomato", "orange", "#00e7e7", "#369579"],
        borderWidth: 0,
        data: [0, 0, 0, 0, 0],
      },
    ];
    for (let i = 0; i < result.length; i++) {
      if (req.employee.client.includes(result[i].postedBy)) {
        if (result[i].vote === 1) {
          datasets[0].data[0] += 1;
        }
        if (result[i].vote === 2) {
          datasets[0].data[1] += 1;
        }
        if (result[i].vote === 3) {
          datasets[0].data[2] += 1;
        }
        if (result[i].vote === 4) {
          datasets[0].data[3] += 1;
        }
        if (result[i].vote === 5) {
          datasets[0].data[4] += 1;
        }
      }
    }
    res.json({ labels, datasets });
  });
});

router.put("/modifierPayement/:id", requireLoginEmployee, (req, res) => {
  const { montant, start, title } = req.body;
  if (!montant || !start || !title) {
    return res
      .status(422)
      .json({ error: "Essayer de remplir tous les champs" });
  }
  Client.findOne({ _id: req.params.id })
    .then((result) => {
      for (let i = 0; i < result.timetable.length; i++) {
        //result.timetable[i].start.getFullYear() === start.getFullYear() && result.timetable[i].start.getMonth() === start.getMonth() && result.timetable[i].start.getDate() === start.getDate() && result.timetable[i].start.getHours() === start.getHours()-1
        console.log(
          new Date(result.timetable[i].start).getTime() ===
            new Date(start).getTime()
        );
        if (
          new Date(result.timetable[i].start).getTime() ===
          new Date(start).getTime()
        ) {
          result.timetable[i].color = "green";
          result.montant += parseInt(montant);
          if (title === "Séance code") {
            result.seanceCodePayee += 1;
          }
          if (title === "Séance conduite") {
            result.seancePermisPayee += 1;
          }
        }
      }
      result
        .save()
        .then((r) => {
          Employee.findOne({ _id: req.employee._id })
            .then((emp) => {
              for (let j = 0; j < emp.timetable.length; j++) {
                if (
                  new Date(emp.timetable[j].start).getTime() ===
                  new Date(start).getTime()
                ) {
                  emp.timetable[j].color = "green";
                }
              }
              emp.save().then((emps) => {
                res.json(r);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/differenceAvis", requireLoginEmployee, (req, res) => {
  let labels = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aôut",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  Avis.find().then((result) => {
    let datasets = [
      {
        label: "Avis positifs",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "#369579",
        backgroundColor: "#369579",
        pointBorderColor: "#369579",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
        tension: 0.4,
      },
      {
        label: "Avis négatifs",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "red",
        backgroundColor: "red",
        pointBorderColor: "red",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
        tension: 0.4,
      },
    ];
    for (let i = 0; i < result.length; i++) {
      if (req.employee.client.includes(result[i].postedBy)) {
        if (result[i].vote >= 3) {
          for (let j = 0; j < 12; j++) {
            if (result[i].createdAt.getMonth() === j) {
              datasets[0].data[j] += 1;
            }
          }
        } else {
          for (let j = 0; j < 12; j++) {
            if (result[i].createdAt.getMonth() === j) {
              datasets[1].data[j] += 1;
            }
          }
        }
      }
    }
    res.json({ labels, datasets });
  });
});

router.get("/nouveauClients", requireLoginEmployee, (req, res) => {
  const data = [];
  User.find({
    _id: { $in: req.employee.clientRequest },
  }).then((result) => {
    for (let i = 0; i < result.length; i++) {
      data[i] = [
        result[i]._id,
        result[i].name,
        result[i].age,
        result[i].cin,
        result[i].tel,
        result[i].email,
        "",
      ];
    }
    res.send(data);
  });
});

router.delete("/removeClientNouveau/:id", requireLoginEmployee, (req, res) => {
  console.log(req.body);
  User.findOne({ _id: req.params.id })
    .then((resul) => {
      resul
        .remove()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((errs) => {
      res.send(errs);
    });
});
module.exports = router;
