import React, {useContext, useState} from "react"
import ReactPlayer from "react-player";
import video from "../assets/video.mp4";

// Кастомный хук usePlayer, предназначен обработки состояния
// фонового видео

const MyPlayerContext = React.createContext()

export const usePlayer = () =>
    useContext(MyPlayerContext)

const PlayerProvider = ({children}) => {

    const [play, setPlay] = useState(true)

    const togglePlay = () => {
        setPlay(prevState => !prevState)
    }

    return (
        <MyPlayerContext.Provider value={{togglePlay, play}}>
                {
                    children
                }
                <div className="videoContainer">
                    <ReactPlayer
                        playing={play}
                        style={{zIndex: 1}}
                        width="100%"
                        height= "auto"
                        url={video}
                        muted={true}
                        loop={true}
                    />
                </div>
        </MyPlayerContext.Provider>
    )
}

export default PlayerProvider