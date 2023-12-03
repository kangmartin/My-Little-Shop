const bcrypt = require('bcrypt');
const { Member } = require('../models/membersModel');

async function addMember(name, email, password) {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const member = await Member.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        console.log('Member added successfully!', member.toJSON());
    } catch (error) {
        console.error('Error when trying to add member!', error);
    }
}

async function getAllMembers() {
    try {
        const members = await Member.findAll({
            attributes: ['name', 'email', 'isBan', 'role']
        });
        console.log('List of all members', members);
        return members;
    } catch (error) {
        console.error('Error when fetching all members', error);
        return [];
    }
}


async function banMember(email) {
    try {
        const result = await Member.update({ isBan: true }, {
            where: { email: email }
        });

        console.log('Member banned successfully!');
        return result;
    } catch (error) {
        console.error('Error when trying to ban member!', error);
    }
}

async function unbanMember(email) {
    try {
        const result = await Member.update({ isBan: false }, {
            where: { email: email }
        });

        console.log('Member unbanned successfully!');
        return result;
    } catch (error) {
        console.error('Error when trying to unban member!', error);
    }
}

async function deleteMember(email) {
    try {
        const result = await Member.destroy({
            where: { email: email }
        });

        console.log('Member deleted successfully!');
        return result;
    } catch (error) {
        console.error('Error when trying to delete member!', error);
    }
}

async function changeMemberRole(email, newRole) {
    try {
        const result = await Member.update({ role: newRole }, {
            where: { email: email }
        });

        console.log('Member role updated successfully!');
        return result;
    } catch (error) {
        console.error('Error when trying to update member role!', error);
    }
}

module.exports = { addMember, getAllMembers, banMember, deleteMember, changeMemberRole, unbanMember };

