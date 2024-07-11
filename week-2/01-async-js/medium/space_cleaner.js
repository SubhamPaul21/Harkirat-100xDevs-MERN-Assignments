const fs = require("fs");

function clean_space_from_file(file) {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        data_list = data.split(" ");
        cleaned_data_list = data_list.filter(element => element !== "");
        final_output = cleaned_data_list.join(" ");

        fs.writeFile(file, final_output, "utf-8", (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log("Content trimmed and beautified");
        });
    });
}

clean_space_from_file("D:\\Harkirat_MERN\\assignments\\week-2\\01-async-js\\easy\\writing_file.txt");