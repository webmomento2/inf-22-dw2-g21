const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggerController")
const config = require("./services/configService");
const app = express();
const userRoute = require('./routes/userRoute');
const serieRoute = require('./routes/serieRoute');
const filmeRoute = require('./routes/filmeRoute');

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/filmes", filmeRoute);
app.use("/series", serieRoute);
app.use("/users", userRoute);



// start server
app.listen(config.PORT, function () {
    console.log(`app running on ${config.HOST}:${config.PORT}`);
});
