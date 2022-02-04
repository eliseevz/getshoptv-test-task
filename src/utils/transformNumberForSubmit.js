
// Трансформируем введеный номер в формат для валидации (911 111 11 11)

export const transformNumberForSubmit = (data) => {
    const numberCopy = data.split("").join("")
    const number = data[0] === "7"
        ? numberCopy.split("").splice(0, 1).join("")
        : numberCopy

    return number
}