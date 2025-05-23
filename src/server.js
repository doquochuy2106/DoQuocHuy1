import express from "express"
import configViewEngine from "./configs/viewEngine.js"
import initwebRoutes from "./routes/web.js"
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const PORT = process.env.PORT || 8082;

//configViewEngine
configViewEngine(app);

//initwebRouters
initwebRoutes(app)


app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = ", PORT);
})

