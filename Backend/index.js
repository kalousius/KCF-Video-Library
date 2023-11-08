import express from 'express';
import cors from 'cors';
const app = express();
// use cors middleware
app.use(cors());

//your routes and application code
app.get('/get', (req, res) => {
    res.send('Data from the server');
});

const port =  4000;
app.listen(port, () => {
    console.log('App is running on port ${port}');
});
