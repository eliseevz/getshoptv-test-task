import React from 'react';
import SuccessMessage from "../components/successMessage";
import CloseButton from "../components/closeButton";
import QRCode from "../components/qrCode";

const FinalPage = () => {
    return (
        <div>
            <SuccessMessage/>
            <CloseButton/>
            <QRCode/>
        </div>
    );
};

export default FinalPage;
