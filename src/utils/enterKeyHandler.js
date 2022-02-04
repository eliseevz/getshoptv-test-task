
// Находим актуальный фокусный элемент. Проверяем, существует ли он
// Если существует, тогда создаем новый ивент со значением buubles: false (кроме обрабокти input)
// И форсируем клик
export const enterKeyHandler = (controls, position) => {
    if (controls[position.x] && controls[position.x][position.y][position.z]) {
        const node = controls[position.x][position.y][position.z]
        const event = new Event("click", { bubbles: node.type === "checkbox" ? true : false })
        controls[position.x][position.y][position.z].dispatchEvent(event)
    }
}