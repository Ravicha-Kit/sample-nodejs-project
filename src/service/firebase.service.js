require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.FIREBASE_API_KEY;
const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

class FirebaseService {
    static async login(email, password) {
        try {
            const response = await axios.post(loginUrl, {
                email: email,
                password: password,
                returnSecureToken: true
            });
            const user = response.data;
            return { uid: user.localId, email: user.email, idToken: user.idToken };
        } catch (error) {
            throw new Error(`Firebase login failed: ${error.response ? error.response?.data?.error?.message : error.message}`);
        }
    }
}

module.exports = FirebaseService;