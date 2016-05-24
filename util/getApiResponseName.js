module.exports = function(apiName){
    var reg = /\./g;
    if(apiName.match("^taobao"))
        apiName = apiName.substr(7);
    return apiName.replace(reg,'_')+"_response";
}
