
const ACCEPT_HEADER = 'Accept';
const CONTENT_TYPE = 'Content-Type';
const ACCESS_TOKEN = 'x-auth-token';
const ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin';

export const makeApiRequestHeader = (methodName, requestHeaders, requestBody, config) => {
    let requestHeaderObject = {};
    requestHeaderObject[ACCEPT_HEADER] = requestHeaders && requestHeaders[ACCEPT_HEADER] ? requestHeaders[ACCEPT_HEADER] : 'text/plain';
    requestHeaderObject[CONTENT_TYPE] = requestHeaders && requestHeaders[CONTENT_TYPE] ? requestHeaders[CONTENT_TYPE] : 'text/plain';
    requestHeaderObject[ACCESS_TOKEN] = requestHeaders && requestHeaders[ACCESS_TOKEN] ?
        requestHeaders[ACCESS_TOKEN] : config && config.authToken ?
            config.authToken : undefined;
    if (!requestHeaderObject[ACCESS_TOKEN]) {
        delete requestHeaderObject[ACCESS_TOKEN]
    }

    const apiRequestHeader = {
        method: methodName,
        headers: Object.assign({}, requestHeaderObject),
        body: ['POST', 'PUT'].includes(methodName) && requestBody ? JSON.stringify(requestBody) : undefined,
    }

    return apiRequestHeader;
}
