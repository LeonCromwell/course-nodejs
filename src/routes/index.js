import newsRouter from "./news.js"
import siteRouter from "./site.js"


export function route(app) {

//basic routing
app.use("/news", newsRouter)
app.use("/", siteRouter)
}

