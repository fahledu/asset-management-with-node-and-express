import { Router } from "express";
import { getUser } from "./controllers/user-controller";

const router = Router();

router.get("/users", getUser);

export default router