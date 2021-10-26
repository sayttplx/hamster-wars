const express = require('express');
const app = express();
const cors = require('cors')


const PORT = process.env.PORT || 1338;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public') )
app.use(express.json());
app.use(cors());

// Logger
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	console.log(req.body);
	next();
})


app.get('/', (req, res) => {
    console.log('request received');
    res.send('Hello World!');
});

const animalData = ['katt','hund','apa','kanin']

app.get('/animals', (req, res) => {
    res.send(animalData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
