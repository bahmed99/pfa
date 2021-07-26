import {
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "./components/a.navbar/Navbar";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route  exact path={"/ahmed"} component={Navbar} />

            </Switch>
        </div>
    )
}
