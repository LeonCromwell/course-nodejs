import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';

class CourseController {
    //[GET] ./courses/:slug
    async show(req, res, next) {
        try {
            const resultTest = await Course.findOne({ slug: req.params.slug }).exec();

            res.render('courses/show', {
                courseDetail: mongoose.mongooseToObject(resultTest),
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new CourseController();
