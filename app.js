const express = require('express');

const app = express();

app.get('/', (req, res) =>{
res.send(`hello world!`);
});

app.get('/about' ,(req, res) =>{
	res.send(`I like long walks.`);
})
const port = (process.env.PORT || 4000);
app.listen(port, () => console.log(`Listening on ${port}`));
