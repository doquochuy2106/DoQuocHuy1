import express from "express"
import configViewEngine from "./config/viewEngine.js"
import initwebRoutes from "./routes/web.js"
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";



const app = express()
const PORT = process.env.PORT || 8082;

//configViewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initwebRouters
initwebRoutes(app)



app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = ", PORT);
})

