const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json();
const relaxMessageRoutes = require("./relaxmessages/routes");
const stressMessageRoutes = require("./stressmessages/routes");

const app = express();

app.use(cors());
app.use(jsonParser);
app.use(relaxMessageRoutes);
app.use(stressMessageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on ${port}`));
