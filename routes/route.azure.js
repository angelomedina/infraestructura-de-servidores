const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const sql = require('mssql');
const conn = require('../db/dbconn.js');
const routePool = new sql.ConnectionPool(conn);

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/test', (req, res) => {


    routePool.connect().then(pool => {
        return pool.request().execute('test');

    }).then(val => {

        routePool.close();
        return res.status(200).json({ success: true, data: val.recordset, message: 'Exito test' });

    }).catch(err => {

        routePool.close();
        console.error(err);
        err.status = 500;
        return next(err);

    });
});

module.exports = router;