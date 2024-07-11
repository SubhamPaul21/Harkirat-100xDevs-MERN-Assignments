const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userAuthorization = req.headers.authorization;
    if (!userAuthorization || !userAuthorization.includes("Bearer")) {
        res.status(404).json({
            message: "Authorization Token not provided in header"
        });
    } else {
        try {
            const userAccessToken = userAuthorization.replace("Bearer", "").trim();
            const user = jwt.verify(userAccessToken, jwtPassword);
            if (user) {
                req.username = user.username;
                req.password = user.password;
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