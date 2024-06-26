import { engine } from 'express-handlebars';
import morgan from 'morgan';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { route } from './routes/index.js';
import * as db from './config/db/index.js';
import { env } from 'process';
import { authenticateToken, globalAccount } from './app/middleware/authenticateToken.js';

dotenv.config();
//connect to db
db.connect();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(
    session({
        secret: 'mk',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    }),
);

// Trong file cấu hình ứng dụng Express
app.use((req, res, next) => {
    res.locals.account = req.session.account || null;
    next();
});

app.use((req, res, next) => {
    const excludedPaths = ['/auth/login', '/auth/register'];
    if (excludedPaths.includes(req.path)) {
        return next();
    }
    return authenticateToken(req, res, next);
});

app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
            eq: (a, b) => a == b,
            account: () => {
                return globalAccount || 'concac';
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

if (env.NODE_ENV === 'production') {
    app.listen(process.env.PORT, () => {
        console.log(`Production App listening on port ${process.env.PORT}`);
    });
} else {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}
