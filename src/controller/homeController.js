import userService from "../service/userService.js"

const handleHelloWord = (req, res) => {
    return res.render("home.ejs")
}
const handleUserpage = (req, res) => {
    //model => get data from database

    return res.render("user.ejs")
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewuser(email, password, username);
    userService.getUserList();

    return res.send("handleCreateNewUser")
}

module.exports = {
    handleHelloWord, handleUserpage, handleCreateNewUser
}