import { engine } from 'express-handlebars';
import morgan from 'morgan';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import dotenv from 'dotenv';

import { route } from './routes/index.js';
import * as db from './config/db/index.js';

dotenv.config();
//connect to db
db.connect();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

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
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
