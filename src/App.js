import React, {useEffect, useRef} from "react"
import {Router, Switch, Route} from "react-router-dom";
import PromoPage from "./pages/PromoPage";
import FormPage from "./pages/FormPage";
import FinalPage from "./pages/FinalPage";
import MainPage from "./pages/MainPage";
import {KeyboardProvider} from "./hooks/useKeyBoard";
import PlayerProvider from "./hooks/usePlayer";
import history from "./utils/history";
import {withRouter} from "react-router-dom";

export default withRouter(function App({location}) {

    useEffect(() => {
        const keysListener = document.querySelector(".keyboard_controller")
        if (keysListener) {
            keysListener.focus()
        }
    }, [location])

  return (
    <KeyboardProvider>
        <PlayerProvider>
            <div className="contentContainer">
                <Switch>
                    <Route path="/final" exact component={FinalPage}/>
                    <Route path="/form" exact component={FormPage}/>
                    <Route path="/promo" exact component={PromoPage}/>
                    <Route path="/" exact component={MainPage}/>
                </Switch>
            </div>
        </PlayerProvider>
    </KeyboardProvider>
  );
})