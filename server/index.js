const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./twetter/routes");

app.use(cors());
app.use("/api", routes);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`listeng on port ${PORT}`);
})