import userService from "../service/userService.js"

const handleHelloWord = (req, res) => {
    return res.render("home.ejs")
}

const handleUserpage = async (req, res) => {
    //model => get data from database
    //cookies that have not been signed
    console.log('Cookies: ', req.cookies)



    //Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList })
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewuser(email, password, username);

    return res.redirect("/user")
}

const handleDeteleUser = async (req, res) => {
    await userService.deleteUser(req.params.id)
    return res.redirect("/user")
}

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id
    let user = await userService.getUserByid(id)
    let userData = {}
    userData = user
    // if (user && user.length > 0) {
    //     userData = user[0];
    // }

    return res.render("user-update.ejs", { userData })
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let id = req.body.id
    // console.log(">>> check body: ", req.body)
    await userService.updateUserInfor(email, username, id)

    return res.redirect("/user")
}

module.exports = {
    handleHelloWord, handleUserpage, handleCreateNewUser, handleDeteleUser, getUpdateUserPage, handleUpdateUser
}