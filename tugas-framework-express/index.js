const express = require("express");
const app = express();
const port = 3000;

app.use((req, res , next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "OK",
        data: null
    })
});

app.get('/hello', (req, res) => {
    res.status(200).json({
        message: "Success fetch message",
        data: "Hello World!"
    })
});

app.get('/user', (req, res) => {
    res.status(200).json({
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@gmail.com"
        }
    })
});

app.listen(port, () => {
    console.log(`Server running at <localhost:${port}>`);
});