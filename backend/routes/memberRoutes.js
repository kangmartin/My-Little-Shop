const express = require('express');
const router = express.Router();
const { addMember } = require('../controllers/controllerMembers');
const bcrypt = require('bcrypt');
const { Member } = require('../models/membersModel');
const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await addMember(name, email, password);
        console.log('Member added successfully');
        res.status(201).send({ message: "Member added successfully" });
    } catch (error) {
       console.error(error);
       res.status(500).send({ error: "Error adding member" });
    }
});

router.post('/login', async (req, res) => {

    const getUserByEmail = async (email) => {
        try {
            const user = await Member.findOne({ where: { email: email } });
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }

    try {
        const user = await getUserByEmail(email);

        if (!user) {
            console.error('User does not exist');
            return res.status(401).send({ error: 'User does not exist' });
            
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.error('Wrong password');
            return res.status(401).send({ error: 'Wrong password' });
        }

        const payload = {
            user: {
                id: user.id,
                name: user.name,
                role: user.role
                
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
            
        );
        console.error('Connexion established')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;
