import React from 'react';
import InputMask from 'react-input-mask';
import KeyBoard from "./keyBoard";
import {useHistory} from "react-router";

const Form = () => {

    const history = useHistory()

    return (
        <div className="fullHeightWrap">

            <h4>Введите ваш номер телефона</h4>
            <InputMask alwaysShowMask={true} mask="+7(\999) 999 99 99" maskChar=" ">
                {
                    () => <input className="formInput" type="text"/>
                }
            </InputMask>;
            <p className="text-center">И с вами свяжется наш менеджер для дальнейшей консультации</p>
            <KeyBoard/>
            <div className="form-check d-flex align-items-center mt-3">
                <input className="form-check-input formCheckBox" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label fs-6 ms-4" htmlFor="flexCheckDefault">
                    Согласие на обработку персональных данных
                </label>
            </div>
            <button onClick={() => history.push("/final")} className="formSubmitButton mt-5">Подвердить номер</button>

        </div>
    );
};

export default Form;
