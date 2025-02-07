const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    if (!username || !password) {
        res.status(404).json({
            message: "Username or Password not provided in header"
        });
    } else {
        try {
            const admin = await Admin.findOne({ username: username, password: password });
            if (admin) {
                next();
            } else {
                throw new Error("invalid admin");
            }
        } catch (err) {
            res.status(401).json({
                msg: "Unauthorized Admin Access"
            });
        }
    }
}

module.exports = adminMiddleware;