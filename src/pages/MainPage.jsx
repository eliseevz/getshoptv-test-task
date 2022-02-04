import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import {usePlayer} from "../hooks/usePlayer";

const MainPage = () => {

    const history = useHistory()
    // Контроль и значения состояния видео-плеера
    const {play, togglePlay} = usePlayer()

    useEffect(() => {
        // Проверка на первый запуск
        // Если первый, тогда в последющем показывает оффер
        // Если нет, тогда воспроизводим видео
        if (play) {
            setTimeout(() => {
                history.push("/promo")
            }, 5000)
        } else {
            togglePlay()
        }
    }, [])

    return (
        <div>
        </div>
    );
};

export default MainPage;
