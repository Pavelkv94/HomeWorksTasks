import React from "react";
import { Route, Switch } from "react-router";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            {/*<Route path={"/"} exact render={() => <Redirect to={PRE_JUNIOR}/>}/>*/}

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
