const app = require("./index");
const connect = require("./config/db");

app.listen(2415, async() =>{

    await connect();
    console.log("listening the server of 2415")

})

module.exports = app;