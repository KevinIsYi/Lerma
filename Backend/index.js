const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./database/config');
const cors = require('cors');

const app = express();
dotenv.config();
dbConnection();

app.use( express.json() );

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${ process.env.PORT }`);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/item', require('./routes/item'));
app.use('/api/cart', require('./routes/userItem'));