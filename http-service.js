/**
 * Created by adem on 16-Feb-19.
 */

export class HttpService{
    static getData(url){
        return new Promise( (resolve, reject) => {
            // construct the http request
            const HTTP_REQUEST = new XMLHttpRequest();
            // initialize the request
            HTTP_REQUEST.open('GET', url);
            HTTP_REQUEST.onreadystatechange = () => {
                if (HTTP_REQUEST.readyState == XMLHttpRequest.DONE && HTTP_REQUEST.status === 200) {
                    resolve(JSON.parse(HTTP_REQUEST.responseText));
                } else if (HTTP_REQUEST.readyState === XMLHttpRequest.DONE) {
                    reject(JSON.parse(HTTP_REQUEST.responseText));
                }
            }
            // send the request
            HTTP_REQUEST.send();
        });
    }
}
