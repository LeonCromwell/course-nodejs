import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';

class MeController {
    //[GET] ./me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/storedCourses', {
                    storedCourses: mongoose.multibleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] ./me/stored/:id/edit
    editCourses(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((courses) => {
                res.render('me/editCourses', {
                    Course: mongoose.mongooseToObject(courses),
                });
            })
            .catch(next);
    }

   
    
}

export default new MeController();
