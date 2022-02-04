import React, {useEffect, useState} from 'react';
import InputMask from 'react-input-mask';
import KeyBoard from "./keyBoard";
import {useHistory} from "react-router";
import {useKeyboard} from "../hooks/useKeyBoard";
import validatePhoneService from "../services/validatePhone.service";
import {transformNumberForSubmit} from "../utils/transformNumberForSubmit";

const Form = () => {

    const history = useHistory()
    const {currentKey} = useKeyboard()
    const [data, setData] = useState({number: "", agrees: false})
    const [validateButton, setValidateButton] = useState(true)
    const [error, setError] = useState(null)

    const submitHandler = async () => {
        const number = transformNumberForSubmit(data.number)
        if (number.length < 10) {
            setError("Телефон введен неверно")
            return
        }
        try {
            const {data: respData} = await validatePhoneService.validate(number)
            if (respData.valid) {
                setError(null)
                history.push("/final")
            } else {
                setError("Неверно введен номер")
            }
        } catch (e) {
            setError("На сервере произошла ошибка")
        }
    }

    const addNumberHandler = (number) => {
        if (data.number[0] === "7" && data.number.length < 11) {
            setData(prevState => ({...prevState, number: prevState.number+number}))
        } else if (data.number.length < 10) {
            setData(prevState => ({...prevState, number: prevState.number+number}))
        }
    }

    const deleteNumberHandler = () => {
        setData(prevState => {
            const newData = prevState.number.split("")
            newData.pop()
            return {...prevState, number: newData.join("")}
        })
    }

    const agreeHandlerChange = () => {
        setData(prevState => ({
            ...prevState,
            agrees: !prevState.agrees
        }))
    }

    useEffect(() => {
        const {key} = currentKey
        if (Number(key) >= 0 && Number(key) <= 9 && key !== "" && key !== " "  && key != null) {
            addNumberHandler(Number(key))
        }  else if (key === "Backspace" && data.number.length > 0) {
            deleteNumberHandler()
        }
    }, [currentKey])

    useEffect(() => {
        setValidateButton(!(data.agrees && data.number.length > 9))
    }, [data])


    return (
        <div className="fullHeightWrap">
            <h4 className="text-center">Введите ваш номер телефона</h4>
            <InputMask
                alwaysShowMask={true}
                mask="+7\(999) 999 99 99"
                maskChar="_"
                value={data.number}
                maskOptions = {{
                    permanents: [1]
                }}
            >
                {
                    () => <input  className={`formInput ${error && "text-danger"}`} type="text"/>
                }
            </InputMask>
            {
                error && <span className="text-danger fs-4">{error}</span>
            }
            <p className="text-center formManager">И с вами свяжется наш менеджер для дальнейшей консультации</p>
            <KeyBoard addNumberHandler={addNumberHandler} deleteNumberHandler={deleteNumberHandler} />
            <div className="form-check d-flex align-items-center justify-content-center mt-3">
                <input onChange={() => null} onClick={agreeHandlerChange} checked={data.agrees} id="checkbox" className="formCheckBox" type="checkbox" id="checkbox"/>
                <label className="form-check-label formCheckLabel fs-6 ms-4" htmlFor="checkbox">
                    Согласие на обработку персональных данных
                </label>
            </div>

            <button disabled={validateButton} id="submitButton" onClick={submitHandler} className="formSubmitButton">Подвердить номер</button>
        </div>
    );
};

export default Form;
