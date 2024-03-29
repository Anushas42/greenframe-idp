const express = require('express');
const app = express();
const port = 8081;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Web app is running on http://localhost:${port}`);
});
