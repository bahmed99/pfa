import React, { useState, useEffect } from "react";
import axios from "axios"

import { useHistory, Link } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import Table from "./Table/Table.js";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";

import Danger from "./Typography/Danger.js";
import Card from "./CustomTabs/Cards/Card";
import CardHeader from "./CustomTabs/Cards/CardHeader";
import CardIcon from "./CustomTabs/Cards/CardIcon";
import CardBody from "./CustomTabs/Cards/CardBody";
import CardFooter from "./CustomTabs/Cards/CardFooter";



import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "./charts.js";

import styles from "./dashboardStyle.js";

import '../../assets/css/components/dashboard/style.css'

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
  const [info3, setInfo3] = useState()
  const [info4, setInfo4] = useState()
  const [moyenne, setMoyenne] = useState()
  const [moyenne1, setMoyenne1] = useState()
  const [moyenne2, setMoyenne2] = useState()
  const [clients, setClients] = useState([])
  const History = useHistory()

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
      setMoyenne(((res.data.series[0].reduce((a, b) => a + b, 0)) / 7).toFixed(2))

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
      setMoyenne2(((res.data.series[0].reduce((a, b) => a + b, 0)) / 12).toFixed(2))


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
      setMoyenne1(((res.data.series[0].reduce((a, b) => a + b, 0)) / 12).toFixed(2))


    }).catch(err => {
      console.log(err)
    })

    axios.get('http://localhost:3001/admin/repartitionAvis', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setInfo3(res.data)



    }).catch(err => {
      console.log(err)
    })

    axios.get('http://localhost:3001/admin/differenceAvis', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {
      setInfo4(res.data)



    }).catch(err => {
      console.log(err)
    })

    axios.get('http://localhost:3001/admin/nouveauClients', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(resul => {
      setClients(resul.data)
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
                <Link onClick={(e) => History.push("/ressources-humaine")}>
                  Lire plus
                </Link>
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
                <Danger>
                  <Warning />
                </Danger>
                <Link onClick={(e) => History.push("/ressources-humaine")}>
                  Lire plus
                </Link>
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
                <Danger>
                  <Warning />
                </Danger>
                <Link onClick={(e) => History.push("/cars")}>
                  Lire plus
                </Link>
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
                <Danger>
                  <Warning />
                </Danger>
                <Link onClick={(e) => History.push("/ressources-humaine")}>
                  Lire plus
                </Link>
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
                <AccessTime /> modifier en temps réel
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
                <AccessTime /> modifier en temps réel
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
              <h4 className={classes.cardTitle}>Contact par mois</h4>
              <p className={classes.cardCategory}>{moyenne2} Contact en moyenne par mois</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> modifier en temps réel
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Répartition des avis</CardTitle>
              <p className="card-category">Analyse en temps réel</p>
            </CardHeader>
            <CardBody style={{ height: "237px" }}>
              <Pie
                data={info3}
                options={dashboardEmailStatisticsChart.options}
              />
            </CardBody>
            <CardFooter>
              <hr />
              <div className="stats" style={{ margin: "auto auto" }}>
                <i className="fa fa-comments-o" /> Avis
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col md="8">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h5">Différence entre avis positifs & avis négatifs</CardTitle>
              <p className="card-category">Analyse en temps réel </p>
            </CardHeader>
            <CardBody>
              <Line
                data={info4}
                options={dashboardNASDAQChart.options}
                width={400}
                height={100}
              />
            </CardBody>
            <CardFooter>
              <div className="card-stats" style={{ margin: "auto auto" }}>
                <i className="fa fa-star" /> Avis positifs & Avis négatifs
              </div>
            </CardFooter>
          </Card>
        </Col>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Demandes des clients</h4>
              <p className={classes.cardCategoryWhite}>
                {/* Nouveau client le {clients?clients[clients.length-1].createdAt:""} */}
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Nom", "Âge", "Cin", "Tel","Email", ""]}
                tableData={clients}
                clients={clients}
                setClients={setClients}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Row>

    </div>
  );
}
