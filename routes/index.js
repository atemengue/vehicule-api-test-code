import createVehiculeRoute from './create.js';
import deleteVehiculeRoute from './delete.js';
import readVehiculeRoutes from './read.js';
import updateVehiculeRoute from './update.js';


const VehiculeAPIRoutes = (app) => {
  app.use(createVehiculeRoute);
  app.use(readVehiculeRoutes);
  app.use(updateVehiculeRoute);
  app.use(deleteVehiculeRoute);
}


export default VehiculeAPIRoutes;