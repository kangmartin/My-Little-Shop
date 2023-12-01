const bcrypt = require('bcrypt');
const { Member, sequelize } = require('../models/membersModel');

async function addMember(name, email, password) {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const produit = await Member.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        console.log('Member added successfully!', produit.toJSON());
    } catch (error) {
        console.error('Error when trying to add member!', error);
    }
}

module.exports = { addMember };