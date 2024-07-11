// Backend
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// create "interest calculator" route to display the interest amount and rate according to the query parameters passed in the url
// interest?principal=100&rate=5&time=2
app.get('/interest', (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.json({
        total: total,
        interest: interest
    });
});

app.listen(3000, () => {
    console.log("Listening in PORT: 3000");
})