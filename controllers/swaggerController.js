const swaggerJSDoc = require("swagger-jsdoc");
const config =require("../services/configService");
const apikeyheader = "x-api-key";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "ApiKeyAuthentication_02",
      version: "1.0.0",
      description: "Example 01 for Basic Authentication",
      contact: { name: "Your name" },
    },
    servers: [ {url: `http://${config.HOST}:` + config.PORT,},],
    components: {
      securitySchemes: {
        ApiKeyAuth: { type: "apiKey", in: "header", name: apikeyheader},
      },
    },
    security: [{ ApiKeyAuth: [] }],
  };
  
  const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  module.exports = swaggerSpec;