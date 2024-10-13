const BaseError = require("../Errors/base.error");
const { StatusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next) {
    // Log the error object and its type
    console.log("Error object passed to handler: ", err);
    console.log("Is instance of BaseError: ", err instanceof BaseError);

    if (err instanceof BaseError) {
        console.log("Custom BaseError detected. Sending error response.");
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        });
    }

    // Log when falling back to general error handling
    console.log("Not a BaseError. Sending internal server error response.");
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong",
        error: err.message || err, // err.message might not exist
        data: {}
    });
}

module.exports = errorHandler;
