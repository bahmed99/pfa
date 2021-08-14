import { useEffect } from "react";
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";

import Signin from "./pages/o.Signin/Signin";


import HomeClient from "./pages/a.client";
import Home from "./pages/k.home/home";
import Courses from "./pages/a.client/courses";
import Course from "./pages/a.client/course";
import Employee from "./pages/k.employee/employee"

import Reset from "./pages/o.Signin/Reset";
import NewPassword from "./pages/o.Signin/NewPassword";

import Correction from "./pages/a.client/correction";

import Footer from "./components/k.footer/footer"

import Avis from "./pages/a.client/o.avis/Avis";
import NavBarClient from "./components/a.navbarClient/index"

import Cours from "./pages/a.client/cours";
import Cour from "./pages/a.client/cour";

import Utilisateur from "./pages/o.employee/utilisateur";
import Profile from "./components/o.utilisateur/Profile";
import Profile1 from "./components/o.admin/Profile";



import Emplois from "./pages/a.employe/Emplois.js";
import Cars from "./pages/k.employee/cars.js";
import Car from "./pages/k.admin/cars.js";
import EmploisClient from "./pages/a.client/emplois.js";
import SigninAdmin from "./pages/a.admin/auth/signin"
import ForgotPassword from "./pages/a.admin/auth/forgotPassword";
import NewPasswordAdmin from "./pages/a.admin/auth/newPassword";
import HomeAdmin from "./pages/a.admin/home/Home";
import EmploisAdmin from "./pages/a.admin/emplois/Emplois";
import Utilisateurs from "./pages/o.admin/utilisateurs";
import AjouterCours from "./pages/a.employe/AjouterCours";


export default function MainRouter() {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem("user"))
    const detect = JSON.parse(localStorage.getItem("detect"))
    let reponse = JSON.parse(localStorage.getItem("reponse"));
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        const detect = JSON.parse(localStorage.getItem("detect"))
        // JSON.parse --> trod une chaine de caractere il objet 
        if (user && detect === 1) {
            if (!history.location.pathname.startsWith('/cours') && !history.location.pathname.startsWith('/tests') && !history.location.pathname.startsWith('/test') && !history.location.pathname.startsWith('/avis') && !history.location.pathname.startsWith('/reset') && !history.location.pathname.startsWith('/emplois')) {
                history.push('/')
            }
        }
        else if (user && detect === 2) {
            //history.push('/')
        }
        else if (user && detect === 3) { }

        else {
            if (!history.location.pathname.startsWith('/reset') && !history.location.pathname.startsWith('/forgot-password') && !history.location.pathname.startsWith('/sign-in') && !history.location.pathname.startsWith('/admin')) {
                history.push("/")
            }

        }
    }, [])
    return (
        <div>
            <Switch>
                <Route exact path={"/sign-in"}>
                    <Signin />
                    <Footer />
                </Route>

                <Route exact path={"/khadija"} component={Home} />

                <Route exact path={"/khadija2"} component={Employee} />
                <Route exact path={"/tests"} component={Courses} />
                <Route exact path={"/test/:id"} component={Course} />

                {(user && detect === 1) ? <Route exact path={"/"} component={HomeClient} /> : (user && detect === 2) ? <Route exact path={"/"} component={Employee} /> : (user && detect === 3) ? <Route exact path={"/"} component={HomeAdmin} /> : <Route exact path={"/"} component={Home} />}


                <Route exact path={"/forgot-password"}>

                    <Reset />
                    <Footer />
                </Route>
                <Route exact path={"/reset/:token"}>
                    <NewPassword />
                    <Footer />
                </Route>


                {(user && detect === 1) ?
                    <div>

                        <oRute exact path={"/home"} component={HomeClient} />
                        <Route exact path={"/avis"}>
                            <NavBarClient />
                            <Avis />
                            <Footer />
                        </Route>
                        <Route exact path={"/test/:id"} component={Course} />
                        <Route exact path={"/tests"} component={Courses} />
                        <Route exact path={"/cours"} component={Cours} />
                        <Route exact path={"/cours/:id"} component={Cour} />
                        <Route exact path={"/test/reponse/:id"} component={Correction} />
                        <Route exact path={"/emplois"} component={EmploisClient} />


                    </div> : ""}

                <Route exact path={"/admin"} component={SigninAdmin} />
                <Route exact path={"/admin/forgot-password"} component={ForgotPassword} />
                <Route exact path={"/admin/reset-password/:token"} component={NewPasswordAdmin} />

                {reponse && user ? <Route exact path={"/test/reponse/:id"} component={Correction} /> : ""}

                {(user && detect === 2) ?
                    <div>
                        <Route exact path={"/emplois"} component={Emplois} />
                        <Route exact path={"/cars"} component={Cars} />
                        <Route exact path={"/home"} component={Employee} />
                        <Route exact path={"/utilisateurs"} component={Utilisateur} />
                        <Route exact path={"/client-profile/:id"} component={Profile} />
                        <Route exact path={"/utilisateur-profile/:id"} component={Profile1} />
                        <Route exact path={"/courses"} component={AjouterCours} />
                    </div> : ""}
                {(user && detect === 3) ?
                    <div>
                        <Route exact path={"/home"} component={HomeAdmin} />
                        <Route exact path={"/ressources-humaine"} component={Utilisateurs} />
                        <Route exact path={"/utilisateur-profile/:id"} component={Profile1} />
                        <Route exact path={"/home"} component={HomeAdmin} />
                        <Route exact path={"/emplois"} component={EmploisAdmin} />
                        <Route exact path={"/cars"} component={Car} />
                    </div> : ""}
            </Switch>
        </div>
    )
}