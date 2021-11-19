import React from "react";
import Anasayfa from "../pages/Anasayfa";
import Filmsayfa from "../pages/Filmsayfa"
import Dizisayfa from "../pages/Dizisayfa";

import {
    BrowserRouter as Router,
    Switch,
    Route,
 
  } from "react-router-dom";

const Routes = () => {
    return (
        //Router Dom Kullanılarak Sayfalar Arası Bağlantı
        <Router>
            <Switch>
                <Route exact path="/">
                    <Anasayfa />
                </Route>
                <Route path="/filmler">
                    <Filmsayfa />
                </Route>
                <Route path="/diziler">
                    <Dizisayfa />
                </Route>
            </Switch>
    </Router>
    )
}
export default Routes;