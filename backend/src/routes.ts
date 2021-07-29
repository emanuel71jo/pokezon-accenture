import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { ItemsController } from "./controllers/ItemsController";
import { OrdersController } from "./controllers/OrdersController";
import { UsersController } from "./controllers/UsersController";
import { checkJwt } from "./middlewares/checkJwtMiddleware";

const usersController = new UsersController();
const authController = new AuthController();
const ordersController = new OrdersController();
const itemsController = new ItemsController();

const routes = Router();

routes.post("/signIn", authController.signIn);

routes.post("/users", usersController.create);

routes.use(checkJwt);

routes.route("/users").get(usersController.index);
routes.route("/users/:id").get(usersController.show);
routes
  .route("/orders")
  .get(ordersController.index)
  .post(ordersController.create);
routes.route("/items").get(itemsController.index);

export { routes };
