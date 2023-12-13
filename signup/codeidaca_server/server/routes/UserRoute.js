import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexController";

const router = Router();
router.get("/all", IndexController.UserController.allget);
router.post("/signin", authJWT.authenticate, authJWT.login);
router.post("/signup", IndexController.UserController.signup);
//router.post("/refreshtoken",authJWT.refreshToken)
router.post("/signin", authJWT.authenticate, authJWT.login);
// router.post("/signup", IndexController.UserController.signup);

export default router;
