const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.set('view engine', 'ejs');

app.use("/css", express.static(path.resolve(__dirname, 'Assets/css')));
app.use("/img", express.static(path.resolve(__dirname, 'Assets/img')));
app.use("/js", express.static(path.resolve(__dirname, 'Assets/js')));
app.use("/fonts", express.static(path.resolve(__dirname, 'Assets/fonts')));
app.use("/plugins", express.static(path.resolve(__dirname, 'Assets/plugins')));
app.use("/bootstrap", express.static(path.resolve(__dirname, 'Assets/bootstrap')));
app.use("/", require("./Server/routes/router"));   

var server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const io = require('socket.io')(server, {
    allowEIO3: true // false by default
});

var userConnection = [];

io.on('connection', (socket) => {
    console.log('Socket id is: ' + socket.id);
    socket.on('userconnect', (data) => {
        console.log('Logged in user: ', data.displayName);
        userConnection.push({ connectionId: socket.id, user_id: data.displayName });
    var userCount = userConnection.length;
    console.log('User count: ', userCount);
    });
});