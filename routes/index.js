const express = require('express');
const router = express.Router();
const todo = require('../model/todolist');

router.get('/', (req, res) => {
    res.send('hello there');
});

module.exports = router;