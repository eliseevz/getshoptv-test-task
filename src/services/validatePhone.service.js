import axios from "axios"

// Сервис для запроса на валидацию номера

const http = axios.create({
    baseURL: "http://apilayer.net/api/",
})
const validatePhoneService = {
    validate: async (number) => await http.get("validate", {
        params: {
            "access_key": "84b7cd266316546f69e5b6b2580edcd8",
            "country_code": "RU",
            "number": `${number}`
        }
    })
}

export default validatePhoneService