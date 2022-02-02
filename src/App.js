import React, {useEffect, useRef} from "react"
import ReactPlayer from "react-player";
import video from "./assets/video.mp4"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import FormPage from "./pages/FormPage";
import FinalPage from "./pages/FinalPage";

function App() {

    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    },[])


  return (
    <div tabIndex="0" ref={ref}>
        <BrowserRouter>
            <div className="contentContainer">
                <Switch>
                    <Route path="/final" exact component={FinalPage}/>
                    <Route path="/form" exact component={FormPage}/>
                    <Route path="/" exact component={MainPage}/>
                </Switch>
            </div>
        </BrowserRouter>
        <div className="videoContainer">
            <ReactPlayer
                playing={true}
                style={{zIndex: 1}}
                width="100%"
                height= "auto"
                url={video}
                muted={true}
                loop={true}
            />
        </div>
    </div>
  );
}

export default App;
