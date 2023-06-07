const express = require('express');
const router = express.Router();
const todo = require('../model/todolist');

router.get('/', async (req, res) => {
    const mylist = await todo.find({});
    res.render('index', {
        mylist: mylist
    });
});

router.post('/', async (req, res) => {
    try {
        const mylist = new todo({
            title: req.body.title,
            description: req.body.description
        });
        await mylist.save();
        res.redirect('/');
    } catch (error) {
        res.render('index');
    }
});

module.exports = router;