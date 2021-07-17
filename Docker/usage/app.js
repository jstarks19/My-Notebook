const app = require('express')();


app.get('/', (req,res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Listening'));