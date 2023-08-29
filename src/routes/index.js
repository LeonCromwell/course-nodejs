import newsRouter from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';

export function route(app) {
    //basic routing
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
