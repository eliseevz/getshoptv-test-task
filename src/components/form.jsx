import React from 'react';
import InputMask from 'react-input-mask';
import KeyBoard from "./keyBoard";
import {useHistory} from "react-router";

const Form = () => {

    const history = useHistory()

    return (
        <div className="fullHeightWrap">

            <h4 className="text-center">Введите ваш номер телефона</h4>
            <InputMask alwaysShowMask={true} mask="+7(\999) 999 99 99" maskChar=" ">
                {
                    () => <input className="formInput" type="text"/>
                }
            </InputMask>
            <p className="text-center formManager">И с вами свяжется наш менеджер для дальнейшей консультации</p>
            <KeyBoard/>
            <div className="form-check d-flex align-items-center justify-content-center mt-3">
                <input className="formCheckBox" type="checkbox" id="flexCheckDefault"/>
                <label className="form-check-label formCheckLabel fs-6 ms-4" htmlFor="flexCheckDefault">
                    Согласие на обработку персональных данных
                </label>
            </div>
            <button onClick={() => history.push("/final")} className="formSubmitButton">Подвердить номер</button>

        </div>
    );
};

export default Form;
