const { StatusCodes } = require("http-status-codes");
const BaseError=require('./base.error');

class Notimplemented extends BaseError{
    constructor(methodName){
        super("Notimplemented",StatusCodes.NOT_IMPLEMENTED,`${methodName}`,{})
    }
}
module.exports=Notimplemented;