import { Router } from "express";
import { login } from "../contoller/login.user.js";

const routes = Router();

routes.post("/user/login", login);

export default routes;
