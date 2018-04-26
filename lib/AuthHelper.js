module.exports = function (sdk, authName, authPassword, useHmac) {
    if (useHmac == true) {
        sdk.Configuration.hmacAuthUserName = authName;
        sdk.Configuration.hmacAuthPassword = authPassword;
    } else {
        sdk.Configuration.basicAuthUserName = authName;
        sdk.Configuration.basicAuthPassword = authPassword;
    }
};