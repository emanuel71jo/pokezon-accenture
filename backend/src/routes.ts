import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { UsersController } from "./controllers/UsersController";
import { checkJwt } from "./middlewares/checkJwtMiddleware";

const usersController = new UsersController();
const authController = new AuthController();

const routes = Router();

routes.post("/signIn", authController.signIn);

routes.post("/users", usersController.create);

routes.use(checkJwt);

routes.route("/users").get(usersController.index);

export { routes };
