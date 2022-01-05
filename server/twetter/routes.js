const Router = require("express").Router;
const router = Router();
const { getTrends, getTweetsOfTrend, getTrendByLang } = require("./controller");

router.get("/trends", (req, res) => {
    const { query, lang } = req.query;
    if (query) {
        getTweetsOfTrend(query, res);
    }
    else { getTrends(res) };
});

router.get("/trends/:lang", (req, res) => {
    const { lang } = req.params;
    getTrendByLang(lang, res);
});

module.exports = router;