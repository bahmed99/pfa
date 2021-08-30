import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Signin from "./pages/Signin/Signin";

import HomeClient from "./pages/client";
import Home from "./pages/k.home/home";
import Courses from "./pages/client/courses";
import Course from "./pages/client/course";
import Employee from "./pages/k.employee/employee";
import CarProfile from "./components/k.car/CarProfile";
import CarProfile2 from "./components/k.car/CarProfile2";
import CarPro from "./pages/k.employee/cars.js";
import Reset from "./pages/Signin/Reset";
import NewPassword from "./pages/Signin/NewPassword";

import Correction from "./pages/client/correction";

import Footer from "./components/k.footer/footer";

import Avis from "./pages/client/avis/Avis";
import NavBarClient from "./components/navbarClient/index";

import Cours from "./pages/client/cours";
import Cour from "./pages/client/cour";

import Utilisateur from "./pages/employee/utilisateur";
import Profile from "./components/utilisateur/Profile";
import Profile1 from "./components/admin/Profile";

import Emplois from "./pages/employee/Emplois.js";
import Cars from "./pages/k.employee/cars.js";
import Car from "./pages/k.admin/cars.js";
import Notifications from "./pages/k.admin/notifications";
import EmploisClient from "./pages/client/emplois.js";
import SigninAdmin from "./pages/admin/auth/signin";
import ForgotPassword from "./pages/admin/auth/forgotPassword";
import NewPasswordAdmin from "./pages/admin/auth/newPassword";
import HomeAdmin from "./pages/admin/home/Home";
import EmploisAdmin from "./pages/admin/emplois/Emplois";
import Utilisateurs from "./pages/admin/utilisateurs";
import AjouterCours from "./pages/employee/AjouterCours";

export default function MainRouter() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const detect = JSON.parse(localStorage.getItem("detect"));
  let reponse = JSON.parse(localStorage.getItem("reponse"));
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const detect = JSON.parse(localStorage.getItem("detect"));
    // JSON.parse --> trod une chaine de caractere il objet
    if (user && detect === 1) {
      if (
        !history.location.pathname.startsWith("/cours") &&
        !history.location.pathname.startsWith("/tests") &&
        !history.location.pathname.startsWith("/test") &&
        !history.location.pathname.startsWith("/avis") &&
        !history.location.pathname.startsWith("/reset") &&
        !history.location.pathname.startsWith("/emplois")
      ) {
        history.push("/");
      }
    } else if (user && detect === 2) {
      //history.push('/')
    } else if (user && detect === 3) {
    } else {
      if (
        !history.location.pathname.startsWith("/reset") &&
        !history.location.pathname.startsWith("/forgot-password") &&
        !history.location.pathname.startsWith("/sign-in") &&
        !history.location.pathname.startsWith("/admin")
      ) {
        history.push("/");
      }
    }
  }, []);
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

        {user && detect === 1 ? (
          <Route exact path={"/"} component={HomeClient} />
        ) : user && detect === 2 ? (
          <Route exact path={"/"} component={Employee} />
        ) : user && detect === 3 ? (
          <Route exact path={"/"} component={HomeAdmin} />
        ) : (
          <Route exact path={"/"} component={Home} />
        )}

        <Route exact path={"/forgot-password"}>
          <Reset />
          <Footer />
        </Route>
        <Route exact path={"/reset/:token"}>
          <NewPassword />
          <Footer />
        </Route>

        {user && detect === 1 ? (
          <div>
            <Route exact path={"/home"} component={HomeClient} />
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
          </div>
        ) : (
          ""
        )}

        <Route exact path={"/admin"} component={SigninAdmin} />
        <Route
          exact
          path={"/admin/forgot-password"}
          component={ForgotPassword}
        />
        <Route
          exact
          path={"/admin/reset-password/:token"}
          component={NewPasswordAdmin}
        />

        {reponse && user ? (
          <Route exact path={"/test/reponse/:id"} component={Correction} />
        ) : (
          ""
        )}

        {user && detect === 2 ? (
          <div>
            <Route exact path={"/emplois"} component={Emplois} />
            <Route exact path={"/home"} component={Employee} />
            <Route exact path={"/utilisateurs"} component={Utilisateur} />
            <Route exact path={"/notifications"} component={Notifications} />
            <Route exact path={"/client-profile/:id"} component={Profile} />
            <Route exact path={"/cars"} component={CarPro} />
            <Route
              exact
              path={"/utilisateur-profile/:id"}
              component={Profile1}
            />
            <Route exact path={"/courses"} component={AjouterCours} />
          </div>
        ) : (
          ""
        )}
        {user && detect === 3 ? (
          <div>
            <Route exact path={"/courses"} component={AjouterCours} />
            <Route exact path={"/home"} component={HomeAdmin} />
            <Route
              exact
              path={"/ressources-humaine"}
              component={Utilisateurs}
            />
            <Route
              exact
              path={"/utilisateur-profile/:id"}
              component={Profile1}
            />
            <Route exact path={"/cars/:id"} component={CarProfile} />
            <Route exact path={"/emplois"} component={EmploisAdmin} />
            <Route exact path={"/cars"} component={Car} />
            <Route exact path={"/notifications"} component={Notifications} />
          </div>
        ) : (
          ""
        )}
      </Switch>
    </div>
  );
}
