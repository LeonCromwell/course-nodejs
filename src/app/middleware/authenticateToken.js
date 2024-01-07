import jwt from 'jsonwebtoken';
import { Account } from '../models/Account.js';

let globalAccount = null;
let isGlobalAccountSet = false;
// Middleware xác thực token
const authenticateToken = async (req, res, next) => {
    const token = req.cookies.token;

    try {
        if (token) {
            const decoded = await jwt.verify(token, 'mk');
            const account = await Account.findOne({ _id: decoded._id });

            if (!isGlobalAccountSet) {
                globalAccount = account.username;
                isGlobalAccountSet = true;
            }
            
            res.locals.account = account;
            req.session.account = account;

            next();
        } else {
            res.clearCookie('token');
            res.redirect('/auth/login');
        }
    } catch (err) {
        res.clearCookie('token');
        res.redirect('/auth/login');
    }
};

export { authenticateToken, globalAccount };
