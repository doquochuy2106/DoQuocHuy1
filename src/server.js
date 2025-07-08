import express from "express"
import configViewEngine from "./config/viewEngine.js"
import initwebRoutes from "./routes/web.js"
import initApiRoutes from "./routes/api.js";
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";
import configCors from "./config/cors.js";
// import connection from "./config/connectDB.js";


const app = express()
const PORT = process.env.PORT || 8081;

//config CORS
configCors(app);

//configViewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
// connection();



//initwebRouters
initwebRoutes(app)
initApiRoutes(app)

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = ", PORT);
})

