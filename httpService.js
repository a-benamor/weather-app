/**
 * Created by adem on 11-Feb-19.
 */

export class HttpService {
    static getData(url){
        return new Promise((resolve, reject) =>{
            const HTTP_REQUEST = new XMLHttpRequest();
            HTTP_REQUEST.open('GET', url);

            HTTP_REQUEST.onreadystatechange = function () {
                if(HTTP_REQUEST.readyState == XMLHttpRequest.DONE && HTTP_REQUEST.status == 200){
                    const RESPONSE_DATA = JSON.parse(HTTP_REQUEST.responseText);
                    resolve(RESPONSE_DATA);
                } else if(HTTP_REQUEST.readyState == XMLHttpRequest.DONE){
                    console.log('Something went wrong ');
                    console.log(HTTP_REQUEST.error);
                    reject(HTTP_REQUEST.status);
                }
            }
            HTTP_REQUEST.send();
        });
    }
}
