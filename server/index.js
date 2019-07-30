const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json();
const messageRoutes = require("./messages/routes");

const app = express();

app.use(cors());
app.use(jsonParser);
app.use(messageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on ${port}`));
