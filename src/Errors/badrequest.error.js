const { StatusCodes } = require("http-status-codes");
const BaseError= require("./base.error");

class Badrequest extends BaseError{
    constructor(propertyName,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName}`,details)
    }
}
module.exports=Badrequest;