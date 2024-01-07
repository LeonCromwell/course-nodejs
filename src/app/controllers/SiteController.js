import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';


class SiteController {
 

    // [GET] /
    index(req, res, next) {
        try {
            Course.find({})
                .then((courses) => {
                    res.render('home', {
                        courses: mongoose.multibleMongooseToObject(courses),
                    });
                })
                .catch(next);
        } catch (error) {
            next(error);
        }
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
