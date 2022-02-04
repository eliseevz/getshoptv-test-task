import React, {useEffect, useRef, useState} from 'react';
import CloseButton from "../components/closeButton";
import QRCode from "../components/qrCode";
import {useKeyboard} from "../hooks/useKeyBoard";
import {parseNodeElements} from "../utils/parseNodeElements";
import {keyBoardController} from "../utils/keyBoardController";

import Slider from "../components/slider";
import {enterKeyHandler} from "../utils/enterKeyHandler";

const FinalPage = () => {

    // Конфигурация интерактивных кнопок на данной странице. По этому конфигу строится массив, при помощи
    // которого реализуется навигация при помощи стрелок
    const controlsConfig = {
        arrowsScreen: {
            arrows: []
        },
        exit: {
            exitButton: []
        }
    }

    // значение нажатой клавиши из хука useKeyboard
    const {currentKey} = useKeyboard()
    // Матрица всех node элементов, предназначенных для управления стрелками
    const [controls, setControls] = useState([])
    // Ставим нулевую позицию
    const [position, setPosition] = useState({x: 0, y: 0, z: 0, isTouched: false, prevPos: null})

    // референс корневого элемента. При помощи него происходит поиск всех дочерних контроллеров
    const general = useRef(null)

    // useEffect, созданный для создания массива контролируемых node элементов
    useEffect(() => {
        if (general) {
            const data = parseNodeElements(controlsConfig, general)
            setControls(data)
        }
    }, [general])

    // Данный useEffect отвечает за обработку нажатых клавишей
    useEffect(() => {
        const {key} = currentKey
        if (key === "Enter") {
            // Обработка нажатия на Enter
            enterKeyHandler(controls, position)
        }
        // Установка фокуса на первый элемент при любом нажатии на клавишу
        if (controls.length > 0) {
            controls[position.x][position.y][position.z].focus()
            keyBoardController(controls, position, setPosition, key)
        }
    }, [currentKey])


    return (
        <div ref={general}>
            <Slider/>
            <CloseButton/>
            <QRCode/>
        </div>
    );
};

export default FinalPage;
