import userService from "../service/userService.js"

const handleHelloWord = (req, res) => {
    return res.render("home.ejs")
}
const handleUserpage = async (req, res) => {
    //model => get data from database
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList })
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewuser(email, password, username);


    return res.send("handleCreateNewUser")
}

module.exports = {
    handleHelloWord, handleUserpage, handleCreateNewUser
}