import { Course } from '../models/Course.js';
import mongoose from '../../../util/mongoose.js';
import jwt from 'jsonwebtoken';

class SiteController {
    home(req, res, next) {
        const token = req.cookies.token;
        if (token) {
            jwt.verify(token, 'mk', (err, decoded) => {
                if (err) {
                    res.clearCookie('token');
                    res.redirect('/auth/login');
                } else {
                    Course.find({})
                        .then((courses) => {
                            res.render('home', {
                                courses: mongoose.multibleMongooseToObject(courses),
                            });
                        })
                        .catch(next);
                }
            });
        } else {
            res.redirect('/auth/login');
        }
    }

    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
