import { BASE_URL } from "../config";
import axios from "axios"

const SendEmail = async (mailDTO) => {
    try {
        const response = await axios.post(BASE_URL + 'mail/send', mailDTO);
        return response;
    } catch (error) {
        return null;
    }
}
export const getQRCode = async (QRCodeDTO) => {
    try {
        const response = await axios.post(BASE_URL+'QR',QRCodeDTO)
        return response;
    } catch (err) {
        return null;
    }
}

export default SendEmail;
