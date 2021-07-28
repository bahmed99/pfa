import {
    Switch,
    Route,
} from "react-router-dom";

import Signin from "./pages/o.Signin/Signin";


import Index from "./pages/a.client";
import Home from "./pages/k.home/home";
import Courses from "./pages/a.client/courses";
import Course from "./pages/a.client/course";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path={"/oussama"} component={Signin} />
                <Route  exact path={"/ahmed"} component={Index} />
                <Route exact path={"/khadija"} component={Home} />
                <Route  exact path={"/tests"} component={Courses} />
                <Route  exact path={"/test/:id"} component={Course} />
            </Switch>
        </div>
    )
}
