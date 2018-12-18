var express = require('express');
var router = express.Router();
var park = require('../models/parks.js');

router.get('/', (req, res, next) => {
    console.log('show park list');
    park.find((err, parks)=> {
        if(err) {
            console.error(err);
            return;
        }
        res.send(parks);
    });
});

router.get('/:id', function() {
    console.log('show park detail');
});

module.exports = router;