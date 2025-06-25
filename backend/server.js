/*
 *  backend API 
 * - Generates mock crypto trades (in-memory).
 */

import express from 'express';           // Import Express framework
import cors from 'cors';                 // Import CORS middleware to allow cross-origin requests
import { generateTrades } from './trades.js'; // Import a function to generate fake trade data

const app = express();                  // Initialize Express app
app.use(cors());                        // Enable CORS for all incoming requests


app.get('/api/trades', (req, res) => {
    const trades = generateTrades(); 

  res.json(trades);                     // Return the trade data as JSON when /api/trades is requested 
});

const PORT = 3000;                      // Set server port
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);  // Start the server and log confirmation
});
