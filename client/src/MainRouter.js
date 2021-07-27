import {
    Switch,
    Route,
} from "react-router-dom";
import Signin from "./pages/o.Signin/Signin";


import Index from "./pages/a.client";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path={"/oussama"} component={Signin} />
                <Route  exact path={"/ahmed"} component={Index} />
            </Switch>
        </div>
    )
}
