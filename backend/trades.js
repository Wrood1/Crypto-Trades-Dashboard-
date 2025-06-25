export function generateTrades() { // Export the function for external use
  const count = 20; // Number of trades to generate
  const sides = ['BUY', 'SELL']; // Possible trade types
  const trades = []; // Array to hold all generated trades

  for (let i = 0; i < count; i++) { // Loop to generate each trade
    const price = 50000 + Math.random() * (75000 - 50000); // Random price between 50k and 75k
    const volume = +(Math.random() * 1).toFixed(2); // Random volume between 0.00 and 1.00
    const timestamp = new Date(Date.now() - i * 60000).toISOString(); // Timestamp, each trade 1 min earlier

    trades.push({ // Push trade object to the array
      id: `t${1000 + i}`, // Unique ID for each trade
      price: +price.toFixed(2), // Price rounded to 2 decimal places
      volume, // Trade volume
      timestamp, // Trade timestamp in ISO format
      side: sides[Math.floor(Math.random() * sides.length)] // Randomly choose BUY or SELL
    });
  }

  return trades; // Return the array of generated trades
}
