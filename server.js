const express = require('express');
const app = express();

app.use(express.json());

const customersRouter = require('./routes/customers');
app.use('/api/customers', customersRouter);

//app.listen(3000, () => console.log('Server is Started on port 3000'));