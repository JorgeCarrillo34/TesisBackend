const mysql = require ('mysql');
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    //Contraseña Cristian
    //password: 'password',
    //Contraseña jorge
    password: '052300$',
    database: 'tesisdb'
})

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    else {
        console.log('Db esta conectado')

    }
});

module.exports= mysqlConnection;