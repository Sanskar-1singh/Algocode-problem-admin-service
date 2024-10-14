const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT || 3000,
    ATLAS_DB_URl:process.env.ATLAS_DB_URl,
    NODE_ENV:process.env.NODE_ENV

}