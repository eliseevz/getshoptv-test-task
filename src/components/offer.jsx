import React from 'react';
import qrCode from "../assets/qr.png"
import {useHistory} from "react-router";


const Offer = () => {

    const history = useHistory()

    return (
        <div className="offerWrap">
            <h4 className="text-center">Исполните мечту вашего малыша!</h4>
            <h5 className="mb-5">Купите ему Volvo track!</h5>
            <img src={qrCode} alt=""/>
            <p className="fs-5 mt-2">Сканируйте QR код или нажмите ок</p>
            <button onClick={() => history.push("/form")} className="btn btn-dark ps-5 pe-5">OK</button>
        </div>
    );
};

export default Offer;
