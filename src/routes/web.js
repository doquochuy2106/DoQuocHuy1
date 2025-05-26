import express from "express"
import homeController from "../controller/homeController.js"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initwebRoutes = (app) => {
    router.get("/", homeController.handleHelloWord);
    router.get("/user", homeController.handleUserpage);
    router.post("/users/create-user", homeController.handleCreateNewUser)
    router.post("/delete-user/:id", homeController.handleDeteleUser)
    router.get("/update-user/:id", homeController.getUpdateUserPage)
    router.post("/user/update-user", homeController.handleUpdateUser)

    return app.use("/", router)
}

export default initwebRoutes;