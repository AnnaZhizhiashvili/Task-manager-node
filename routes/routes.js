const express = require('express');
const router = express.Router();
const client = require('../config/db');
const supabase = require('../config/supabase'); // Import the client



router.get('/tasks', (req, res) => {

    async function fetchTasks() {
        const { data, error } = await supabase
            .from('lists')        // Specify the table name
            .select('*');          // Select all fields

        if (error) {
            console.error('Error fetching tasks:', error.message);
        } else {
            console.log('Tasks:', data); // Display fetched tasks
        }
    }

    fetchTasks();

})
// Route to get all tasks
router.get('/tasks', async (req, res) => {
    try {
        client.connect();
        const result = await client.query('SELECT * FROM tasks');
        res.json(result.rows);  // Send the data as JSON
    } catch (err) {
        client.close();
        console.error('Error querying database:', err);
        res.status(500).send('Server error');
    }
})

module.exports = router;
