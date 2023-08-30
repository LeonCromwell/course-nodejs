import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';

class SiteController {
     home(req, res, next) {
        // try {
        //     const courses = await Course.find({}).exec();

        //     res.render('home', {
        //         courses: mongoose.multibleMongooseToObject(courses),
        //     });
        // } catch (error) {
        //     next(error);
        // }

        Course.find({})
        .then(courses => {res.render('home', {
            courses: mongoose.multibleMongooseToObject(courses)
        })})
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
