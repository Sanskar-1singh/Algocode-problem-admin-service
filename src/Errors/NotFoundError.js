    const { StatusCodes } = require("http-status-codes");
    const BaseError= require("./base.error");

    class NotFoundError extends BaseError{
        constructor(resourceName,resourceValue){
            console.log(resourceValue)
            super("Not found",StatusCodes.NOT_FOUND,`the requested resource:${resourceName} and value ${resourceValue}`,{
                resourceName,
                resourceValue
            })
        }
    }
    module.exports=NotFoundError;