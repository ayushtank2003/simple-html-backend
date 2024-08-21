const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors"); 
const UserRouter = require("./Routes/UserRouter");

const app = express();

app.use(cors());
// Apply the middleware to parse JSON bodies
app.use(express.json());

app.use("/user", UserRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

const DB_URL = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Connected to MongoDB");
        const db = mongoose.connection;

        try {
            await db.collection('users').dropIndex('ussername_1');
            console.log("Index 'ussername_1' dropped successfully");
        } catch (error) {
            if (error.codeName === 'IndexNotFound') {
                console.log("Index 'ussername_1' does not exist");
            } else {
                console.error("Error dropping index:", error);
            }
        }
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
