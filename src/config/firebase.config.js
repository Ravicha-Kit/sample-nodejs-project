const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin
  .firestore()
  .collection('healthcheck')
  .limit(1)
  .get()
  .then(() => {
    console.log('✅ Firestore connection verified successfully!');
  })
  .catch((error) => {
    console.error('❌ Firestore connection failed:', error.message);
  });

module.exports = admin;