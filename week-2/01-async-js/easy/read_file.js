const fs = require("fs");

fs.readFile("1-counter.md", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("File read successfully as shown below: ");
    console.log(data);
});