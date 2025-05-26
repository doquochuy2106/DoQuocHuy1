const { Sequelize } = require('sequelize');

//option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('jwt', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}

export default connection