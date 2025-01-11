import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openai: "3.0.0",
    info: {
      title: "Vehicule API Propelize",
      version: "1.0.0",
      description: "Api express pour la location des vehicules",
    },
    servers: [
      {
        url: "url-server-production",
        description: "Serveur de production"
      },
      {
        url: "http://locahost:3000",
        description: "Serveur local"
      }
    ]
  },
  apis: ["./routes/*.js", "./models/*.js"]
}

const specs = swaggerJSDoc(options);

export default (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
