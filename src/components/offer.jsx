import React from 'react';
import qrCode from "../assets/qr.png"
import {useHistory} from "react-router";
import {usePlayer} from "../hooks/usePlayer";

const Offer = () => {

    const history = useHistory()
    const {togglePlay} = usePlayer()

    const handleSubmit = () => {
        togglePlay()
        history.push("/form")
    }

    return (
        <div className="offerWrap">
            <h4 className="offerHeader text-center">Исполните мечту вашего малыша!</h4>
            <h5 className="offerHeader">Купите ему Volvo track!</h5>
            <img className="offerQR" src={qrCode} alt=""/>
            <p className="offerQRText">Сканируйте QR код или нажмите ок</p>
            <button id="startButton" onClick={handleSubmit} className="myBtn">OK</button>
        </div>
    );
};

export default Offer;
