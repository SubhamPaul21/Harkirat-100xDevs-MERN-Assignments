const fs = require("fs");

const content = "<b>Hello, World. I am writing to this file using the 'FS' library.</b>";

fs.writeFile("writing_file.txt", content, "utf-8", (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("File has been written and saved");
})