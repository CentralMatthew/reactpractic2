import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "../Users/Users";
import {createContext} from "react";
import UserDetails from "../UserDetails/UserDetails";

export default function Routers() {
    return (
        <div>
            <Router>
                    <Link to={{pathname:'/users', search:'page=1'}}>Users</Link>
                    <Switch>
                        <Route exact={true} path={'/users'} component={Users}/>
                        <Route exact={true} path={'/users/:id'} component={UserDetails}></Route>


                    </Switch>
            </Router>


        </div>
    )
}