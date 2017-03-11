/**
 * Created by jaewon-choi on 11/03/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/power/battery', function (req, res, next) {
	res.send({ title: "power battery" });
});

router.get('/power/state', function (req, res, next) {
	res.send({ title: "power state" });
});

router.get('/resourcemanager/systemperf', function (req, res, next) {
	res.send({ title: "resourcemanager systemperfs" });
});

module.exports = router;
