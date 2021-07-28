import {
    Switch,
    Route,
} from "react-router-dom";

import Signin from "./pages/o.Signin/Signin";


import Index from "./pages/a.client";
import Courses from "./pages/a.client/courses";
import Course from "./pages/a.client/course";
import Correction from "./pages/a.client/correction";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path={"/oussama"} component={Signin} />
                <Route  exact path={"/ahmed"} component={Index} />
                <Route  exact path={"/tests"} component={Courses} />
                <Route  exact path={"/test/:id"} component={Course} />
                <Route  exact path={"/test/reponse/:id"} component={Correction} />
            </Switch>
        </div>
    )
}
