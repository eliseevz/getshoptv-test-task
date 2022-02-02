import React from 'react';
import Form from "../components/form";
import CloseButton from "../components/closeButton";
import QRCode from "../components/qrCode";

const FormPage = () => {

    return (
        <div>
            <Form />
            <CloseButton/>
            <QRCode/>
        </div>
    );
};

export default FormPage;
