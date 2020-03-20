const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'Primera Website NodeJS!' });
    
    //res.sendFile(path.join(__dirname, 'views/index.html'));
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Website NodeJS!' });
});

module.exports = router;

