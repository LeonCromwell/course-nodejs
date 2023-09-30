import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';

class SiteController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mongoose.multibleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
