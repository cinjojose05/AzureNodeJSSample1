const express = require('express');
const router = express.Router(); // Create a new router object
const customerdb = require('../customerdb'); // Import the customerdb module

// Define routes scoped to this router
router.get('/', async (req, res) => {
    try {
        const result = await customerdb.connectandQuery(); // Call the function to connect and query the database
        //res.json(result); // Send the result as JSON response
        res.send(`All customers: ${JSON.stringify(result)}`); // Send a response indicating that all customers have been retrieved
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', (req, res) => {
  // Access dynamic parameters using req.params.id
  res.send(`Get user ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

module.exports = router; // Export the router instance
