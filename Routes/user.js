const express = require('express');
const user = require('../models/user');

const userRoutes = express.Router();

//add user routes here
userRoutes.post('/add', async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});




//get all users
userRoutes.get('/', async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }});



//get user by id
userRoutes.get('/:id', async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id);
        if (!foundUser) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(foundUser);
    } catch (error) {
        res.status(500).send(error);
    }
});





//delete user by id
userRoutes.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id);    
        if (!deletedUser) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});




//update user by id
userRoutes.put('/:id', async (req, res) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});




module.exports = userRoutes;