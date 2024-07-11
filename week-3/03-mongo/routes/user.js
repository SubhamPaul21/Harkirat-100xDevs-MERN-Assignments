const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const isExistingUser = await User.findOne({ username: username, password: password });

    if (isExistingUser) {
        res.status(404).json({
            message: "User Account already exists"
        });
    } else {
        const user = new User({
            username: username,
            password: password
        });

        try {
            await user.save();
            res.json({
                message: 'User created successfully'
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }
});

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({});
        res.json({
            courses: courses
        });
    } catch (err) {
        res.status(404).json({
            message: err
        });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    try {
        const isExistingCourse = await Course.findById(courseId);
        if (isExistingCourse) {
            const username = req.headers.username;
            const password = req.headers.password;
            try {
                await User.updateOne({ username: username, password: password }, {
                    "$push": {
                        purchasedCourses: courseId
                    }
                });
                res.json({
                    message: 'Course purchased successfully'
                });
            } catch (err) {
                res.status(404).json({
                    message: err
                });
            }
        } else {
            throw new Error("course ID not found");
        }
    } catch (err) {
        res.status(404).json({
            message: "Course ID not found"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    try {
        const user = await User.findOne({ username: username, password: password })
        res.json({
            purchasedCourses: user.purchasedCourses
        });
    } catch (err) {
        res.status(404).json({
            message: err
        });
    }
});

module.exports = router