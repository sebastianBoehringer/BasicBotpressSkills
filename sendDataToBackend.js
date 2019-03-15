/**
 * Stores the last of the given entitytype in the flow storage
 * @title Send Parameter to Backend
 * @category Information Transfer
 * @author Sebastian Böhringer
 * @param {string} url - The url to send the http-request to
 * @param {string} method - The method to use (either 'post' or 'get'), defaults to get
 * @param {string} paramname - The name of the parameter to send
 * @param {string} paramvalue - The value of the declared parameter
 */
const sendToBackend = async (url, method, paramname, paramvalue) => {
    const axios = require('axios')
    console.log(url)
    console.log(paramvalue)
    if (method === 'post') {
        await axios.post(url), {
            params: {
                paramname: paramvalue
            }
        }
    } else {
        const result = await axios.get(url, {
            params: {
                paramname: paramvalue
            }
        })
        //console.log(result.data)
    }
};
return sendToBackend(args.url, args.method, args.paramname, args.paramvalue);