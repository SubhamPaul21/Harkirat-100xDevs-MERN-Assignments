const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    if (!username || !password) {
        res.status(404).json({
            message: "Username or Password not provided in header"
        });
    } else {
        try {
            const user = await User.findOne({ username: username, password: password });
            if (user) {
                next();
            } else {
                throw new Error("invalid user");
            }
        } catch (err) {
            res.status(401).json({
                msg: "Unauthorized User Access"
            });
        }
    }
}

module.exports = userMiddleware;