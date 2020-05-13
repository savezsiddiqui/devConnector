const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 4000;

//Connect to Database
connectDB();

app.get('/', (req, res) => {
    res.send("Server Running");
})

app.listen(PORT, () => console.log(`Server stared in port ${PORT}`));