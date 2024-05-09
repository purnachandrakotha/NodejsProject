const{connect, connection } = require('mongoose')

module.exports = async()=>{
    try{
        const res = await connect(process.env.MONGO_URI);
        console.log(`Connected with ${res, connection.host}`.yellow.underline);
    }
    catch(err){
        console.log(`Not connected with DB: ${err.message}`.red);
    }
}