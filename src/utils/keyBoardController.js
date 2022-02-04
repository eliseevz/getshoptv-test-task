

// Обработка нажатий на клавиши
export const keyBoardController = (controls, position, setPosition, currentKey) => {
    const row = controls[position.x][position.y]

    // Проверка были ли нажаты до этого клавиши,
    // если нет, то фокусим первый элемент из таблицы
    if (!position.isTouched) {
        row[position.z].focus()
        setPosition(prevState => ({...prevState, isTouched: true}))
        return
    }

    switch(currentKey) {
        case "ArrowDown": {
            if (controls[position.x][position.y + 1] && controls[position.x][position.y + 1][position.z]) {
                controls[position.x][position.y + 1][position.z].focus()
                setPosition(prevState => ({...prevState, y: prevState.y + 1}))
                return
            } else if (controls[position.x] && controls[position.x][position.y + 1]) {
                const maxLength = controls[position.x][position.y + 1].length - 1
                controls[position.x][position.y + 1][maxLength].focus()
                setPosition(prevState => ({...prevState, y: prevState.y + 1, z: maxLength}))
            }
            return
        }
        case "ArrowUp": {
            if (controls[position.x][position.y - 1]) {
                controls[position.x][position.y - 1][position.z].focus()
                setPosition(prevState => ({...prevState, y: prevState.y - 1}))
                return
            }
            return
        }
        case "ArrowRight": {
            if (row[position.z + 1]) {
                row[position.z + 1].focus()
                setPosition(prevState => ({...prevState, z: prevState.z + 1}))
                return
            } else if (controls[position.x + 1]) {
                setPosition(prevState => (
                    {
                        ...prevState,
                        x: 1,
                        y: 0,
                        z: 0,
                        prevPos: {x:prevState.x, y: prevState.y, z: prevState.z}}
                ))
                controls[position.x + 1][0][0].focus()
            }
            return
        }
        case "ArrowLeft": {
            if (position.z === 0 && controls[position.x - 1]) {
                controls[position.prevPos.x][position.prevPos.y][position.prevPos.z].focus()
                setPosition(prevState => ({
                    ...prevState,
                    x: prevState.prevPos.x,
                    y: prevState.prevPos.y,
                    z: prevState.prevPos.z,
                    prevPos: null
                }))
                return
            } else if (row[position.z - 1]) {
                row[position.z - 1].focus()
                setPosition(prevState => ({...prevState, z: prevState.z - 1}))
            }
            return
        }

        default: return
    }
}