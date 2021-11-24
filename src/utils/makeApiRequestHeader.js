const ACCEPT_HEADER = "Accept";
const CONTENT_TYPE = "Content-Type";
const ACCESS_TOKEN = "x-auth-token";
const ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";

export const makeApiRequestHeader = (methodName, requestHeaders, config) => {
  let requestHeaderObject = {};
  requestHeaderObject[ACCEPT_HEADER] =
    requestHeaders && requestHeaders[ACCEPT_HEADER]
      ? requestHeaders[ACCEPT_HEADER]
      : "application/json";
  requestHeaderObject[CONTENT_TYPE] =
    requestHeaders && requestHeaders[CONTENT_TYPE]
      ? requestHeaders[CONTENT_TYPE]
      : "application/json";
  requestHeaderObject[ACCESS_TOKEN] =
    requestHeaders && requestHeaders[ACCESS_TOKEN]
      ? requestHeaders[ACCESS_TOKEN]
      : config && config.authToken
      ? config.authToken
      : undefined;
  if (!requestHeaderObject[ACCESS_TOKEN]) {
    delete requestHeaderObject[ACCESS_TOKEN];
  }

  const apiRequestHeader = {
    method: methodName,
    headers: Object.assign({}, requestHeaderObject),
  };

  return apiRequestHeader;
};
