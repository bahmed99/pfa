import React, { useEffect, useState } from 'react';
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Build from "@material-ui/icons/Build";
import Vignette from "@material-ui/icons/Vignette";
import Settings from "@material-ui/icons/Settings";
import ReportProblem from "@material-ui/icons/ReportProblem"

import Modifier from './Modifier.js';


// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Tasks from "./Tasks/Tasks.js";
import CustomTabs from "./CustomTabs/CustomTabs.js";
import Danger from "./Typography/Danger.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardFooter from "./Card/CardFooter.js";
import CardBody from "./Card/CardBody.js";
import Table from "./Table/Table.js";
import styles from "./dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Notification() {
  const [data1, setData1] = useState([])

  const data = [];
  useEffect(() => {
    fetch("http://localhost:3001/car/notifEmp", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
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
  const visite = [];
  data1.forEach(element => {
    if (element.technicVisit == false) {
      visite.push(Object.values(element))
    }
  });
 

console.log(data1)



  const classes = useStyles();
  return (
    <div style={{ marginLeft: "100px" }} >
      <div style={{ marginLeft: "230px" }}>
        <GridContainer  >
          <GridItem xs={12} sm={8} md={5}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <DirectionsCar />
                </CardIcon>
                <p className={classes.cardCategory}>Cars's check</p>
                <h3 className={classes.cardTitle}>
                  {data.length}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Fix Now
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div style={{ marginLeft: "-100px" }} >
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Build />
                </CardIcon>
                <p className={classes.cardCategory}>Entretien</p>
                <h3 className={classes.cardTitle}>{entr.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Fix Now
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Vignette />
                </CardIcon>
                <p className={classes.cardCategory}>Vignette</p>
                <h3 className={classes.cardTitle}>{vign.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Fix Now
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Settings />
                </CardIcon>
                <p className={classes.cardCategory}>Visite Technique</p>
                <h3 className={classes.cardTitle}>{visite.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Fix Now
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3} >
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <ReportProblem />
                </CardIcon>
                <p className={classes.cardCategory}>Assurance</p>
                <h3 className={classes.cardTitle}>{assur.length}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Fix Now
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>

          <CustomTabs
            title="Voitures"
            headerColor="info"
            tabs={[
              {
                tabName: "Tous",
                tabIcon: DirectionsCar,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["Id", "image", "Numéro de Série"]}
                    tableData={data}
                  />

                ),

              },

              {
                tabName: "Assurance",
                tabIcon: ReportProblem,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["Id", "image", "Numéro de Série"]}
                    tableData={assur}
                  />
                ),
              },
              {
                tabName: "Vignette",
                tabIcon: Vignette,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["Id", "image", "Numéro de Série"]}
                    tableData={vign}
                  />
                ),
              },
              {
                tabName: "Entretien",
                tabIcon: Build,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["Id", "image", "Numéro de Série"]}
                    tableData={entr}
                  />
                ),
              },
              {
                tabName: "Visite Technique",
                tabIcon: Code,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["Id", "image", "Numéro de Série"]}
                    tableData={visite}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>

    </div>
  );
}
