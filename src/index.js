const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port', 19990);

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/routes'));

//empezando server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})