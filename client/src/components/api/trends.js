const getTrends = async () => {
    const req = await fetch("http://localhost:1000/api/trends");
    const jsonRes = await req.json();
    return await jsonRes;
}

const getTweetsByTrend = async (query) => {
    const req = await fetch(`http://localhost:1000/api/trends?query=${query}`);
    const jsonRes = await req.json();
    console.log(jsonRes);
    return await jsonRes;
}

const getTrendsByLang = async () => {
    const req = await fetch("http://localhost:1000/api/trends/en");
    const jsonRes = await req.json();
    return await jsonRes;
}

export { getTrends, getTrendsByLang,getTweetsByTrend };