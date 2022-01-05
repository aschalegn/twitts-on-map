const { T } = require("./config");

const getTrends = (res) => {
    T.get("trends/place", { id: '23424852', count: 100 }, (err, data, _) => {
        const { trends, locations } = data[0];
        console.log(locations);
        res.send(trends);
    });
}

const getTweetsOfTrend = async (query, res) => {
    const processResponse = (err, data, response) => {

        getSingleTweet(data.statuses[0].id_str, res);
        res.send(data);
    }
    T.get("search/tweets", { q: [query, `#${query}`], place_id: '23424852', count: 100, locale: true }, processResponse);
}

const getTrendByLang = async (lang, res) => {
    const processResponse = (err, data, response) => {
        res.send(data);
    }
    T.get("search/tweets", { q: '', lang: lang, count: 100 }, processResponse);
}

const getSingleTweet = async (id, res) => {
    console.log(id);
    T.get(`statuses/show/${id}`, { expansions: 'geo.place_id' }, (err, data, response) => {
        console.log(data);
    })
}

module.exports = { getTrends, getTweetsOfTrend, getTrendByLang };