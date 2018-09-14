const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const cors = require('cors');

const config = {
    databaseURL: "https://lunch-beacon.firebaseio.com",
    projectId: "lunch-beacon",
    storageBucket: "lunch-beacon.appspot.com",
    credential: admin.credential.cert(serviceAccount),
    messagingSenderId: "260674356964"
};
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

admin.initializeApp(config);

const db = admin.firestore();

app.get('/restaurants', (req, res) => {
    lor = [];
    db.collection('restaurants').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                lor.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            res.send(lor);
        })
        .catch((err) => {
            console.log('Error getting docs', err);
        });
});

app.get('/status', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
