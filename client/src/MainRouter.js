import {
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./components/a.navbar/Navbar";
import Signin from "./pages/o.Signin/Signin";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route  exact path={"/ahmed"} component={Navbar} />
                <Route exact path={"/oussama"} component={Signin} />

            </Switch>
        </div>
    )
}
