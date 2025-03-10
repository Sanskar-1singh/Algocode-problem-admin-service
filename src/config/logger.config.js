const winston=require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const allowedTransport=[];


//the below transport configuration is for console>>
allowedTransport.push(new winston.transports.Console({
    level:'warn',
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
       
    )
}));


//the below configuration is for Mongodb>>>
allowedTransport.push(new winston.transports.MongoDB({
    level:'warn',
    db:'mongodb+srv://sanskarsingh812:iebexBGwgxp42CrU@cluster0.tgpuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    collection:'logs',
    // format:winston.format.combine(
    //     winston.format.colorize(),
    //     winston.format.timestamp({
    //         format:"YYYY-MM-DD HH:mm:ss"
    //     }),
    //     winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    // )

}))


allowedTransport.push(new winston.transports.File({
    filename:'applog.log',
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    )

}));

const logger=winston.createLogger( {
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `[${log.level}]:${log.timestamp}  ${log.message}`)
    ),
    transports:allowedTransport
});

module.exports=logger;