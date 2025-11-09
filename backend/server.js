const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// Use the MONGO_URL env variable (Kubernetes will provide this)
const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
console.error("Error: MONGO_URL environment variable not set");
process.exit(1); // stop server immediately
}

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => {
console.log('Database connected successfully');
});

db.on('error', (error) => {
console.error('Database connection error:', error);
});

// Import product routes
const productRoute = require('./routes/api/productRoute'); // adjust path if needed
app.use('/api/products', productRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
console.log(`Server listening on port ${PORT}`);
});
