import React from 'react';
import qr from "../assets/qr.png"

const QRCode = () => {
    return (
        <div className="QRcode">
            <h5>Сканируйте QR код для получения дополнительной инфомрации</h5>
            <img src={qr} alt=""/>
        </div>
    );
};

export default QRCode;
