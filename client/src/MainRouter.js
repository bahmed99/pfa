import {
    Switch,
    Route,
} from "react-router-dom";

import Index from "./pages/a.client";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route  exact path={"/ahmed"} component={Index} />

            </Switch>
        </div>
    )
}
