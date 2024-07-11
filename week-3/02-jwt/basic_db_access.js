const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
    "mongodb+srv://singletoncoder:A1IEUefmLZ62LhV1@subhamdb.lqpczmr.mongodb.net/user_app",
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

async function userExists(username) {
    // should check in the database
    try {
        const user = await User.findOne({ username: username });
        if (user) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

app.post('/signup', async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    if (await userExists(username)) {
        return res.status(403).json({
            msg: "User already exist in our mongo db",
        });
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    });

    try {
        await user.save();
        return res.json({
            msg: "User successfully added in our mongo db",
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            msg: err
        });
    }
});

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!(await userExists(username))) {
        return res.status(403).json({
            msg: "User doesnt exist in our mongo db",
        });
    }

    let token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const users = await User.find({ username: { $ne: username } });
        return res.json({
            users: users
        });
        // return a list of users other than this username from the database
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);