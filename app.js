const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h2>Hy bruh :D</h2>');
});

app.use((req, res, next) => {
	res.send('page not found!!!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
