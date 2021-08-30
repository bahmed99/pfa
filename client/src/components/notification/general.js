import React, { useEffect, useState } from 'react';

function Data() {
  const [data1, setData1] = useState([])
  const data = [];
  useEffect(() => {
    fetch("http://localhost:3001/car/notif", {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        setData1(result)
      })

  }, []);
  data1.map(obj => {
    data.push(Object.values(obj))
  });

  const entr = [];
  data1.forEach(element => {
    if (element.entretien == false) {
      entr.push(Object.values(element))
    }
  });
  const assur = [];
  data1.forEach(element => {
    if (element.assurance == false) {
      assur.push(Object.values(element))
    }
  });

  const vign = [];
  data1.forEach(element => {
    if (element.vignette == false) {
      vign.push(Object.values(element))
    }
  });
}


var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About",
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"',
];

/*module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
};*/
