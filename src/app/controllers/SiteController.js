

import { Course } from "../models/Course.js"


class SiteController {
    async home(req, res) {
        try {
            const courses = await Course.find({}).exec();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
