const express = require('express');
const router = express.Router();
const todo = require('../model/todolist');

// get route all the todolist
router.get('/', async (req, res) => {
    const mylist = await todo.find({});
    res.render('index', {
        mylist: mylist
    });
});

// post route to create new list
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

// get edit view to update
router.get('/:id/edit', async (req, res) => {
    try {
        const mylist = await todo.findById(req.params.id);
        res.render('edit', { mylist: mylist });
    } catch (error) {
        res.redirect('/');
    }
});

// update route
router.put('/:id', async (req, res) => {
    try {
        const mylist = await todo.findById(req.params.id);
        mylist.title = req.body.title;
        mylist.description = req.body.description;
        await mylist.save();
        res.redirect('/');
    } catch (error) {
        res.redirect('/');
    }
});

// delete route
router.delete('/:id', async (req, res) => {
    let myist;
    try {
        mylist = await todo.findById(req.params.id);
        await mylist.deleteOne();
        res.redirect('/');
    } catch (error) {
        res.redirect('/');
    }
});

module.exports = router;