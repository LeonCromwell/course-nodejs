class NewsController {
    //[Get] News
    index(req, res) {
        res.render('news');
    }

    //[GET] ./news/:slug
    show(req, res) {
        res.send('new detail');
    }
}

export default new NewsController();
