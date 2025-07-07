import express from "express"
import configViewEngine from "./config/viewEngine.js"
import initwebRoutes from "./routes/web.js"
import initApiRoutes from "./routes/api.js";
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";
import configCors from "./config/cors.js";
// import connection from "./config/connectDB.js";
import { createJWT, verifyToken } from "./middleware/JWTAction.js"


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

//test JWT
createJWT();
let decodedData = verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZG9xdW9jaHV5IiwiYWRkcmVzcyI6ImhvIGNoaSBtaW5oIiwiaWF0IjoxNzUxODYyMTEzfQ.zdNAofaKrkB_cp9hfyJkAlP-1R4wpS4cnujT3D-_x_4");
console.log(decodedData)

//initwebRouters
initwebRoutes(app)
initApiRoutes(app)

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = ", PORT);
})

