import {
    Switch,
    Route,
} from "react-router-dom";

import Signin from "./pages/o.Signin/Signin";


import Index from "./pages/a.client";
import Home from "./pages/k.home/home";
import Courses from "./pages/a.client/courses";
import Course from "./pages/a.client/course";

import Reset from "./pages/o.Signin/Reset";
import NewPassword from "./pages/o.Signin/NewPassword";

import Correction from "./pages/a.client/correction";

import Footer from "./components/k.footer/footer"

import Avis from "./pages/a.client/o.avis/Avis";
import NavBarClient from "./components/a.navbarClient/index"

import Cours from "./pages/a.client/cours";
import Cour from "./pages/a.client/cour";
import Error404 from "./pages/Error";

export default function MainRouter() {
    let reponse = JSON.parse(localStorage.getItem("reponse"));
    return (
        <div>
            <Switch>
                <Route exact path={"/sign-in"}>
                    <Signin />
                    <Footer />
                </Route>
                <Route  exact path={"/ahmed"} component={Index} />
                <Route exact path={"/khadija"} component={Home} />

                <Route  exact path={"/tests"} component={Courses} />
                <Route  exact path={"/test/:id"} component={Course} />

                <Route exact path={"/forgot-password"}>

                <Route exact path={"/"} component={Home} />
                
                
                <Route exact path={"/register1"}>

                    <Reset />
                    <Footer />
                </Route> 
                <Route exact path={"/reset/:token"}>
                    <NewPassword />
                    <Footer />
                </Route> 
                <Route exact path={"/avis"}>
                    <NavBarClient />
                    <Avis />
                    <Footer />
                </Route>

                {reponse?<Route  exact path={"/test/reponse/:id"} component={Correction} />:""}
                
                <Route  exact path={"/test/:id"} component={Course} />
                <Route  exact path={"/tests"} component={Courses} />
                <Route  exact path={"/cours"} component={Cours} />
                <Route  exact path={"/cours/:id"} component={Cour} />

                <Route exact  component={Error404} />

            </Switch>
        </div>
    )
}
