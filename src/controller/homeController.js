const handleHelloWord = (req, res) => {
    return res.render("home.ejs")
}
const handleUserpage = (req, res) => {
    return res.render("user.ejs")
}

module.exports = {
    handleHelloWord, handleUserpage
}