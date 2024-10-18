const winston=require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const allowedTransport=[];

allowedTransport.push(new winston.transports.Console({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
       
    )
}));

allowedTransport.push(new winston.transports.MongoDB({
    level:'warn',
    db:'mongodb+srv://sanskarsingh812:dx4BPGzWFUMMfS7A@alogocode-logger.v1xa2.mongodb.net/?retryWrites=true&w=majority&appName=alogocode-logger',
    collection:'logs',
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    )

}))

const logger=winston.createLogger( {
    format:winston.format.combine(
        winston.format.timestamp({
            format:"YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
    transports:allowedTransport
});

module.exports=logger;