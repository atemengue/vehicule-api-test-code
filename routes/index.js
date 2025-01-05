import creationVehicule from './create.js';
import deleteVehiculeRoute from './delete.js';
import readVehiculeRoute from './read.js';
import updateVehiculeRoute from './update.js';


const vehiculeApiRoutes = (app) => {
  app.use(creationVehicule);
  app.use(readVehiculeRoute);
  app.use(updateVehiculeRoute);
  app.use(deleteVehiculeRoute);
}

export default vehiculeApiRoutes;