var express = require('express'); //import tarzubda bişi
var router = express.Router();
var ctrlMain=require('../controllers/main');

router.get('/',ctrlMain.index); //main içindeki index metodunun çalışmasını söyler

module.exports = router;
