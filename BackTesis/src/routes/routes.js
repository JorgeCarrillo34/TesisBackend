const { Router } = require('express');
const router = Router();
const {exec} = require("child_process");
const mysqlConnection= require('../database');  


//router.get('/db', (req,res) => {
router.get('/db/:id', (req,res) => {
    const {id}=req.params;
    mysqlConnection.query('select link from master where id = ? ',[id], (err,rows,fields) =>{
    //    mysqlConnection.query('select link from master where id = 1 ', (err,rows,fields) =>{        
        if(!err){ 
            res.json(rows[0]);
        }
        else{
            console.log(err);
        }
    })

});

//QUERY PARA CONSULTAR LOS REPOSITORIOS
router.get('/consultarRepos', (req,res) => {
    mysqlConnection.query('SELECT * FROM tesisdb.master; ', (err,rows,fields) =>{
    if(!err){ 
       res.json(rows);
    }
    else{
         console.log(err);
        }
    })
});



//QUERY PARA CONSULTAR LAS COLUMNAS DISPONIBLES DE LOS REPOSITORIOS
router.get('/consultarColumnas/:id',(req,res) =>{
        const {id} = req.params;
        mysqlConnection.query('SELECT * FROM tesisdb.campos_repositorios where idMaster = ? ',[id], (err,rows,fields) =>{
            if(!err){ 
                res.json(rows);
            }
            else{
                console.log(err);
            }
        })
    
    });


/*
router.post('/db', (req,res) => {
            mysqlConnection.query('select nombre_repositorio from master where id = 1 ', (err,rows,fields) =>{
            if(!err){ 
                res.send('recibido');
            }
            else{
                console.log(err);
            }
        })
    
    });

/*
router.get('/notepad', (req,res) => {
    exec("ipconfig > ipconfig.txt", (err,stdout, stderr) => {
        exec("start notepad ipconfig.txt", (err,stdout, stderr) => {
            if(err){
                res.sendStatus(404);
            }
            else{
                res.sendStatus(200);
            }
        });
    });
});

router.get('/youtube', (req,res) => {
    exec("start chrome www.youtube.com", (err,stdout, stderr) => {
        if(err){
            res.sendStatus(404);
        }
        else{
            res.sendStatus(200);
        }
    });
});
*/

module.exports = router;