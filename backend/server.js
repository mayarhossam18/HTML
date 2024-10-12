const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

const uri = 'mongodb://root:example@mongo:27017'; // Use the service name 'mongo'
const client = new MongoClient(uri);

app.get('/hello', async (req, res) => {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('messages');
    const message = await collection.findOne({}); // Retrieve a document

    res.send(message ? message.text : 'Hello from the Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
