const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 8080; 

// Import routes
const appRoutes = require('./routes/routes');

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],  
    credentials: true 
}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Use routes
app.use('/api', appRoutes); 

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
