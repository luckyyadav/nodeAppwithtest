import { Router } from "express";
import * as ctrl from "../contoller/register.user.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.post("/user/register/create", AuthMiddleware, ctrl.registerUser);
routes.get("/user/allUsers", AuthMiddleware, ctrl.allUsers);
routes.get("/user/register/single/:id", AuthMiddleware,  ctrl.singleUser);
routes.put("/user/register/update/:id", AuthMiddleware, ctrl.updateUser);
routes.delete("/user/register/delete/:id", AuthMiddleware, ctrl.deleteUser);
routes.get("/user/externalapi", ctrl.externalAPi);

export default routes;
