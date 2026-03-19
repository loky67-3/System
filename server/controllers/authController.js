const User = require('../models/user')

const test = (req, res) => {
    res.json("test is working");
};


// REGISTER
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name) {
            return res.json({ error: 'Name is required' });
        }

        if (!email) {
            return res.json({ error: 'Email is required' });
        }

        if (!password || password.length < 6) {
            return res.json({ error: 'Password must be at least 6 characters' });
        }

        const exist = await User.findOne({ email });

        if (exist) {
            return res.json({ error: 'Email is taken already' });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.json({
            message: "Usuario registrado correctamente",
            user
        });

    } catch (error) {
        console.log(error);
    }
};


// LOGIN
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email.trim() });

        if (!user) {
            return res.json({ error: "Usuario no encontrado" });
        }

        if (user.password !== password) {
            return res.json({ error: "Contraseña incorrecta" });
        }

        res.json({
            message: `Bienvenido ${user.name}`,
            user
        });

    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    test,
    registerUser,
    loginUser
};