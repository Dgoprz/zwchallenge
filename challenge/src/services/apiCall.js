import axios from 'axios';
import md5 from 'js-md5';

const base_URL = import.meta.env.VITE_BASE_URL_MARVEL;
const publicKey = import.meta.env.VITE_BASE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_BASE_PRIVATE_KEY;




export const apiCall = async ({ method, url }) => {

    const publickey = publicKey;
    const privatekey = privateKey;
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);
    const fullUrl = base_URL + url + '?limit=' + 50 + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
   
    const config = {
         method: method,
         url: fullUrl
     }; 
   
    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        console.error("Error fetching data", error);
        return error;
    }
}