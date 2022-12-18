
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Node and express server is running on ${PORT}`);
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});






