const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let adminAuthorization = req.headers.authorization;
    if (!adminAuthorization || !adminAuthorization.includes("Bearer")) {
        res.status(404).json({
            message: "Authorization Token not provided in header"
        });
    } else {
        try {
            const adminAccessToken = adminAuthorization.replace("Bearer", "").trim();
            const admin = jwt.verify(adminAccessToken, jwtPassword);
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