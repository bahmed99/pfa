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
  const [data1,setData1]= useState([])
  const data=[];
  useEffect(()=>{
  fetch("http://localhost:3001/car/notif",{
    headers:{
      "Content-Type":"application/json" ,
  }
  }).then(res=>res.json())
  .then(result=>{
    console.log(result)
    setData1(result)
  })
  
},[]);
  data1.map(obj=> {
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
console.log(data);
const first=data[0];
const idCar=first[0];
console.log(idCar)

  
  

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <DirectionsCar/>
              </CardIcon>
              <p className={classes.cardCategory}>Cars's check</p>
              <h3 className={classes.cardTitle}>
                2/4 
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
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        
         <CustomTabs
            title="Cars"
            headerColor="info"
            tabs={[
              {
                tabName: "All",
                tabIcon: Settings,
                tabContent: (
                  <Table
               tableHeaderColor="warning"
                tableHead={["ID", "pic", "Numéro de Série"]}
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
                  tableHead={["ID", "pic", "Numéro de Série"]}
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
                  tableHead={["ID", "pic", "Numéro de Série"]}
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
                  tableHead={["ID", "pic", "Numéro de Série"]}
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
                  tableHead={["ID", "pic", "Numéro de Série"]}
                  tableData={visite}
                />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "pic", "Salary", "Country","hhh","jjjjj"]}
                tableData={data}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
