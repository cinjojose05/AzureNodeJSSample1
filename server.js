const express = require('express');
const app = express();
const port = 80;

app.use(express.json());

const customersRouter = require('./routes/customers');
app.use('/api/customers', customersRouter);

app.listen(process.env.PORT || port);
