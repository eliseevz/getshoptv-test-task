import React from 'react';
import {useHistory} from "react-router";

const CloseButton = () => {

    const history = useHistory()

    return (
        <button onClick={() => history.push("/")} className="closeButton">
            &times;
        </button>
    );
};

export default CloseButton;
