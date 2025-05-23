import express from "express"
import homeController from "../controller/homeController.js"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initwebRoutes = (app) => {
    router.get("/", homeController.handleHelloWord);
    router.get("/user", homeController.handleUserpage)

    return app.use("/", router)
}

export default initwebRoutes;