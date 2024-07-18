import { Router } from "express";
import TodosRouter from "./todos";
import UserRouter from "./users";
import PetRouter from "./pet/PetRouter";

const AppRouter = Router();

AppRouter.use("/todos", TodosRouter);
AppRouter.use("/users", UserRouter);
AppRouter.use("/pet",PetRouter);

export default AppRouter;
