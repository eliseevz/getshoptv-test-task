
// Парсим node элементы в трехмерный массив исходя из конфига

export const parseNodeElements = (controlsConfig, general) => {
    const data = Object.keys(controlsConfig).map(mainKey => {
        const part = controlsConfig[mainKey]
        const temp = Object.keys(part)
        const data2 = []
        for (let i = 0; i < temp.length; i++) {
            const nodeEl = general.current.querySelector(`#${temp[i]}`)
            console.log(nodeEl)
            console.log(temp[i])
            if (temp[i] === "keyboard" || temp[i] === "arrows") {
                const keyboard = Array.from(nodeEl.children)
                console.log(keyboard)
                for (let j = 0; j < keyboard.length; j++) {
                    data2.push(Array.from(keyboard[j].children))
                }
            } else {
                data2.push([nodeEl])
            }
        }
        return data2
    })
    return data
}

