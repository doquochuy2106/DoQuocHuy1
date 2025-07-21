import userApiService from "../service/userApiService.js"
import roleApiService from "../service/roleApiService.js"

const readFunc = async (req, res) => {
    try {
        console.log(req.user);
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;


            let data = await userApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })


        } else {
            let data = await userApiService.getAllUser();
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }



    } catch (error) {
        console.log(err);
        return res.status(500).json({
            EM: 'error from server',
            EC: '1',
            DT: ""
        })
    }
}

const createFunc = async (req, res) => {
    try {
        //validate
        let data = await roleApiService.createNewRoles(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '1',
            DT: ""
        })
    }
}

const updateFunc = async (req, res) => {
    try {
        //validate
        let data = await userApiService.updateUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(err);
        return res.status(500).json({
            EM: 'error from server',
            EC: '1',
            DT: ""
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })

    } catch (error) {
        console.log(err);
        return res.status(500).json({
            EM: 'error from server',
            EC: '1',
            DT: ""
        })
    }
}



module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc,
}