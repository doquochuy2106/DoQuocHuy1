import loginRegisterService from "../service/loginRegisterService.js"

const testAPI = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "test api"
    })
}

const handleRegister = async (req, res) => {
    try {
        //req.body: email, phone, username, password
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters',// error message
                EC: '1', //error code
                DT: '',//date   
            })
        }
        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 letter',// error message
                EC: '1', //error code
                DT: '',//date   
            })
        }

        //service: create user
        let data = await loginRegisterService.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM,// error message
            EC: data.EC, //error code
            DT: '',//date   
        })

    } catch (e) {
        return res.status(500).json({
            EM: 'error from server',// error message
            EC: '-1', //error code
            DT: '',//date   
        })
    }

    console.log(">>>Call me", req.body)
}

module.exports = {
    testAPI, handleRegister
}