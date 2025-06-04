const firebase = require('../config/firebase.config');
const FirebaseService = require('../service/firebase.service');

exports.AuthController =  class AuthController {
    static async register(req, res) {
        try {
            const { email, password } = req.body;
            const user = await firebase.auth().createUser({
                email,
                password,
            });
            res.status(200).json({ message: 'User registered successfully', uid: user.uid, email: user.email });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required' });
            }
            
            const user = await FirebaseService.login(email, password);
            res.status(200).json({ uid: user.uid, email: user.email, token: user.idToken });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
}