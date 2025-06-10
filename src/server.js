import express from "express"
import configViewEngine from "./config/viewEngine.js"
import initwebRoutes from "./routes/web.js"
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";
// import connection from "./config/connectDB.js";


const app = express()
const PORT = process.env.PORT || 8082;

//Add header before the routes are defined
app.use(function (req, res, next) {
    //website you wish to allow to connnect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

    //request method you wish to allow
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATH, DELETE')

    //Request header you wish to allow
    res.setHeader('Access-Controll-Allow-Headers', 'X-Request-with,content-type');

    //Set to true if you need the website include cookies in the  request sent
    //to the API(e.g. in case you use session)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //Pass to next layer of middleware
    next();
});




//configViewEngine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
// connection();

//initwebRouters
initwebRoutes(app)



app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = ", PORT);
})

