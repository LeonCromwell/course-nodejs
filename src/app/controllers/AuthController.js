import { Account } from '../models/Account.js';
import mongoose from '../../../util/mongoose.js';
import jwt from 'jsonwebtoken';

class AuthController {
    // [GET] /auth/register
    register(req, res, next) {
        res.render('auth/register');
    }

    // [GET] /auth/login
    login(req, res, next) {
        res.render('auth/login');
    }

    // [POST] /auth/register
    async postRegister(req, res, next) {
        try {
            const formdata = req.body;
            if (formdata.password !== formdata.confirm_password) {
                throw new Error('password not match');
            }
            const account = new Account(formdata);
            await account.save();
            res.redirect('/auth/login');
        } catch (error) {
            if (error.message === 'password not match') {
                res.locals.error = 'Mật khẩu không khớp';
                const error = {
                    password: res.locals.error,
                };
                res.render('auth/register', { error });
                return;
            }
            if (error.code === 11000) {
                res.locals.error = 'Username đã tồn tại';
                const error = {
                    username: res.locals.error,
                };
                res.render('auth/register', { error });
                return;
            }
            next(error);
        }
    }

    // [POST] /auth/login
    async postLogin(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;

        try {
            const data = await Account.findOne({ username: username, password: password });
            if (data == null) {
                throw new Error('username or password incorrect');
                return;
            }
            const token = jwt.sign({ _id: data._id }, 'mk');
            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            if (error.message === 'username or password incorrect') {
                res.locals.error = 'Tên đăng nhập hoặc mật khẩu không đúng';
                const error = {
                    username: res.locals.error,
                    password: res.locals.error,
                };
                res.render('auth/login', { error });
                return;
            }
            next(error);
        }
    }
}

export default new AuthController();
