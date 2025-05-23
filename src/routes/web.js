import express from "express"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */
const initwebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello doquochuy dep trai 123");
    })

    return app.use("/", router)
}

export default initwebRoutes;