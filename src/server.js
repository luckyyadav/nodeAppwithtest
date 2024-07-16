import express from "express";
import morgan from "morgan";
import cors from "cors";

// local imports
import { errorMiddleware } from "./middlewares/error.middleware.js";
import registerRoutes from "./router/user.routes.js";
import loginRoutes from "./router/login.routes.js";
const app = express();
//miidlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//routes
app.use("/api/", registerRoutes);
app.use("/api/", loginRoutes);
app.use(errorMiddleware);
//server
app.listen(8000, () => {
  console.log("Server is running on 8000");
});

export default app;
