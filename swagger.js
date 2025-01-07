import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vehicule API',
      version: '1.0.0',
      description:
        'A simple Express vehicule API',
    },

    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://vehicule-api.herokuapp.com',
        description: 'Production server',
      }
    ],
  },
  apis: ['./routes/*.js', "./model/*.js"],
}






const specs = swaggerJSDoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}