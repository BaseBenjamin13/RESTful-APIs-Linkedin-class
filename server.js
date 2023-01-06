
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
require('dotenv').config()

const app = express();
const PORT = 3000;


mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://benjamin_m:${process.env.DB_PASS}@cluster0.9xnz1.mongodb.net/CRM?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express server is running on ${PORT}`);
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});






