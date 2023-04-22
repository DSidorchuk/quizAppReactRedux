
export const useHttp = () => {
    const request = async (url, method='GET', body=null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;

        } catch(e) {
            throw e;
        }

    }

    const translate = async (arr) => {
        const encodedParams = new URLSearchParams();
        const text = `${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}+${arr[4]}+${arr[5]}`;
        encodedParams.append("q", text);
        encodedParams.append("target", "ru");
        encodedParams.append("source", "en");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '85852d1f6dmsh37c5d414809ba86p15e39fjsna55a8a897f53',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };

        try {
            const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options);
            if (!response.ok) {
                throw new Error(`Could not fetch ${text}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;

        } catch (e) {
            throw e
        }
    }

    return {request, translate};
}