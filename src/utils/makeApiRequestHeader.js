
const ACCEPT_HEADER = 'Accept';
const CONTENT_TYPE = 'Content-Type';
const ACCESS_TOKEN = 'Authorization';

export const makeApiRequestHeader = (methodName, requestHeaders, requestBody, config) => {
    let requestHeaderObject = {};
    //requestHeaderObject[ACCEPT_HEADER] = requestHeaders && requestHeaders.ACCEPT_HEADER ? requestHeaders.ACCEPT_HEADER : 'application/json';
    requestHeaderObject[CONTENT_TYPE] = requestHeaders && requestHeaders.CONTENT_TYPE ? requestHeaders.CONTENT_TYPE : 'application/json';
    // if (methodName.toUpperCase() === 'POST') {
    //     requestHeaderObject[ACCESS_TOKEN] = requestHeaders && requestHeaders.ACCESS_TOKEN ? 
    //                                             requestHeaders.ACCESS_TOKEN : config && config.access_token ? 
    //                                             config.access_token : undefined;
    // }

    const apiRequestHeader = {
        method : methodName,
        headers : Object.assign({}, requestHeaderObject),
        body : ['POST', 'PUT'].includes(methodName) && requestBody ? JSON.stringify(requestBody) : undefined,
    }
    return apiRequestHeader;
}
