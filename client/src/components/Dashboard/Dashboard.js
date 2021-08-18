import React, { useState, useEffect } from "react";
import axios from "axios"
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Table from "./Table/Table";
import Tasks from "./Tasks/Tasks.js";
import CustomTabs from "./CustomTabs/CustomTabs.js";
import Danger from "./Typography/Danger.js";
import Card from "./CustomTabs/Cards/Card";
import CardHeader from "./CustomTabs/Cards/CardHeader";
import CardIcon from "./CustomTabs/Cards/CardIcon";
import CardBody from "./CustomTabs/Cards/CardBody";
import CardFooter from "./CustomTabs/Cards/CardFooter";

import { bugs, website, server } from "./general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "./charts.js";

import styles from "./dashboardStyle.js";

import './style.css'

//////////////////////////////////////////

import {


  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { Line, Pie } from "react-chartjs-2";


//////////////////

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [client, setClient] = useState()
  const [employee, setEmployee] = useState()
  const [car, setCar] = useState()
  const [info, setInfo] = useState()
  const [info1, setInfo1] = useState()
  const [info2, setInfo2] = useState()
  const [moyenne, setMoyenne] = useState()
  const [moyenne1, setMoyenne1] = useState()
  const [moyenne2, setMoyenne2] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/admin/statistics', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setCar(res.data.car)
      setClient(res.data.client)
      setEmployee(res.data.employee)
      console.log(res.data)


    }).catch(err => {
      console.log(err)
    })

    axios.get('http://localhost:3001/admin/nbrSeances', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setInfo(res.data)
      setMoyenne((res.data.series[0].reduce((a, b) => a + b, 0)) / 7)

    }).catch(err => {
      console.log(err)
    })


    axios.get('http://localhost:3001/admin/nbreAvis', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setInfo2(res.data)
      setMoyenne2((res.data.series[0].reduce((a, b) => a + b, 0)) / 12)


    }).catch(err => {
      console.log(err)
    })

    axios.get('http://localhost:3001/admin/nbreSub', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setInfo1(res.data)
      setMoyenne1((res.data.series[0].reduce((a, b) => a + b, 0)) / 12)


    }).catch(err => {
      console.log(err)
    })



  }, [])
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon className="fa fa-users" />
              </CardIcon>
              <p className={classes.cardCategory}>Nombre de clients</p>
              <h3 className={classes.cardTitle}>
                {client}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon className="fas fa-user-tie" />
              </CardIcon>
              <p className={classes.cardCategory}>Nombre d'employées</p>
              <h3 className={classes.cardTitle}>{employee}</h3>
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
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon className="fas fa-car" />
              </CardIcon>
              <p className={classes.cardCategory}>Nombre de Voitures</p>
              <h3 className={classes.cardTitle}>{car}</h3>
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
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total</p>
              <h3 className={classes.cardTitle}>+{client + employee}</h3>
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
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={info}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Nombre de séances par jours</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> {moyenne}
                </span>{" "}
                en moyenne par jour.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={info1}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Nombre de client par mois</h4>
              <p className={classes.cardCategory}>{moyenne1} client en moyenne par mois</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={info2}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Avis positifs par mois</h4>
              <p className={classes.cardCategory}>{moyenne2} Avis positifs en moyenne par mois</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Email Statistics</CardTitle>
              <p className="card-category">Last Campaign Performance</p>
            </CardHeader>
            <CardBody style={{ height: "266px" }}>
              <Pie
                data={dashboardEmailStatisticsChart.data}
                options={dashboardEmailStatisticsChart.options}
              />
            </CardBody>
            <CardFooter>
              <div className="legend">
                <i className="fa fa-circle text-primary" /> Opened{" "}
                <i className="fa fa-circle text-warning" /> Read{" "}
                <i className="fa fa-circle text-danger" /> Deleted{" "}
                <i className="fa fa-circle text-gray" /> Unopened
              </div>
              <hr />
              <div className="stats">
                <i className="fa fa-calendar" /> Number of emails sent
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col md="8">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
              <p className="card-category">Line Chart with Points</p>
            </CardHeader>
            <CardBody>
              <Line
                data={dashboardNASDAQChart.data}
                options={dashboardNASDAQChart.options}
                width={400}
                height={100}
              />

            </CardBody>
            <CardFooter>
              <div className="chart-legend">
                <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                <i className="fa fa-circle text-warning" /> BMW 5 Series
              </div>
              <hr />
              <div className="card-stats">
                <i className="fa fa-check" /> Data information certified
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>

    </div>
  );
}
