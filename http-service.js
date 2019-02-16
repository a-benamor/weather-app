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
            HTTP_REQUEST.onload = () => resolve(JSON.parse(HTTP_REQUEST.responseText));
            HTTP_REQUEST.onerror = () => reject(HTTP_REQUEST.statusText);
            // send the request
            HTTP_REQUEST.send();
        });
    }
}
