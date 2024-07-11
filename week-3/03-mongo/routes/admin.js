const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes

// Working FINE!
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const isExistingAdmin = await Admin.findOne({ username: username, password: password });

    if (isExistingAdmin) {
        res.status(404).json({
            message: "Admin Account already exists"
        });
    } else {
        const admin = new Admin({
            username: username,
            password: password
        });

        try {
            await admin.save();
            res.json({
                message: 'Admin created successfully'
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }
});

// Working FINE!
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    // Course details
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });

    try {
        const courseDetails = await course.save();
        res.json({
            message: 'Course created successfully',
            courseId: courseDetails._id
        });
    } catch (err) {
        res.status(404).json({
            message: err
        });
    }
});

// Working FINE!
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        if (courses.length > 0) {
            res.json({
                courses: courses
            });
        } else {
            res.status(404).json({
                message: "No courses added in DB yet!"
            });
        }
    } catch (err) {
        res.status(404).json({
            message: err
        });
    }
});

module.exports = router;