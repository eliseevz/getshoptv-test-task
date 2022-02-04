import React, {useContext, useEffect, useRef, useState} from "react"


// Кастомный хук useKeyboard, предназначен для отлавливания нажатий на клавиши
// и передачу этих данных в дочерние элементы


const KeyboardContext = React.createContext()

export const useKeyboard = () =>
    useContext(KeyboardContext)

export const KeyboardProvider = ({children}) => {

    const preventedList = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowRight"]
    const [currentKey, setCurrentKey] = useState({key: null})

    const ref = useRef()

    const heyHandler = (e) => {
        if (preventedList.includes(e.key)) {
            e.preventDefault()
        }
        setCurrentKey(prevState => ({key: e.key}))
    }

    useEffect(() => {
        if ((ref.current)) {
            ref.current.focus()
        }
    }, [ref])


    return (
        <KeyboardContext.Provider value={{currentKey, setCurrentKey}}>
            <div className="keyboard_controller" ref={ref} onKeyDown={heyHandler} tabIndex="0">
                {children}
            </div>
        </KeyboardContext.Provider>
    )
}