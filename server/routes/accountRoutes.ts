import Express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  addAccount,
  dissconnectAccount,
  getAccounts,
} from "../controllers/accountController.js";


const accountRouter = Express.Router();

accountRouter.get("/", protect, getAccounts);
accountRouter.post("/", protect, addAccount);
accountRouter.delete("/:id", protect, dissconnectAccount);
export default accountRouter;
