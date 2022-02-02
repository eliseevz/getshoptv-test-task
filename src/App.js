import React, {useEffect, useRef} from "react"
import ReactPlayer from "react-player";
import video from "./assets/video.mp4"

function App() {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    },[])


  return (
    <div tabIndex="0" ref={ref}>
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
