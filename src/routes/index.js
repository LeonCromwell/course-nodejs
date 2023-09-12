import newsRouter from './news.js';
import meRouter from './me.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';

export function route(app) {
    //basic routing
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
