const express = require('express');
const app = express();
const path = require('path');

// setting
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//app.get('/', (req, res) => {
//    res.render('index', { title: 'Primera Website NODE!' });
    
    //res.sendFile(path.join(__dirname, 'views/index.html'));
//});

//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});