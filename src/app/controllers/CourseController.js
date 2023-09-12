import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';

class CourseController {
    //[GET] ./courses/:slug
   show(req, res, next) {
        // try {
        //     const resultTest = await Course.findOne({ slug: req.params.slug }).exec();

        //     res.render('courses/show', {
        //         courseDetail: mongoose.mongooseToObject(resultTest),
        //     });
        // } catch (error) {
        //     next(error);
        // }

        Course.findOne({ slug: req.params.slug })
        .then(course => res.render('courses/show', {
            courseDetail: mongoose.mongooseToObject(course),
        }))
        .catch(next)
    }

    //[GET] ./courses/create
     create(req, res, next) {
        res.render('courses/create');
        
    }

    //[GET] ./courses/store
    async store(req, res, next) {
        try {
            const formdata = req.body;
            formdata.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;

            const course = new Course(formdata);
            await course.save();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    }

    //[PUT] ./courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body )
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[DELETE] ./courses/:id
    destroy(req, res, next) {
        Course.deleteOne( {_id: req.params.id} )
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

export default new CourseController();
