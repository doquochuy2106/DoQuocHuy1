import dotenv from 'dotenv';
dotenv.config();

const configCors = (app) => {
    //Add header before the routes are defined
    app.use(function (req, res, next) {
        console.log(req.method);
        //website you wish to allow to connnect
        res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

        //request method you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATH, DELETE')

        //Request header you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Request-with,content-type, Authorization');

        //Set to true if you need the website include cookies in the  request sent
        //to the API(e.g. in case you use session)
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (req.method === "OPTIONS") {
            return res.sendStatus(200);
        }
        //Pass to next layer of middleware
        next();
    });

}
export default configCors