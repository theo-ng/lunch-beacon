const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const config = {
    apiKey: "AIzaSyBE3ulGuSsB8wal55w1oPijBo5EQ7-bFqo",
    authDomain: "lunch-beacon.firebaseapp.com",
    databaseURL: "https://lunch-beacon.firebaseio.com",
    projectId: "lunch-beacon",
    storageBucket: "lunch-beacon.appspot.com",
    credential: admin.credential.cert(serviceAccount),
    messagingSenderId: "260674356964"
};
const app = express();
const port = process.env.PORT || 5000;

admin.initializeApp(config);

const db = admin.firestore();
_getRestaurants = () => {
    const res = {};
    db.collection('restaurants').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                res[doc.id] = doc.data();
            });
        })
        .catch((err) => {
            console.log('Error getting docs', err);
        });
}

app.get('/restaurants', (req, res) => {
    res.send(_getRestaurants());
});

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
