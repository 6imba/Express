const getAllUsers = (req,res)=> {
    res.send("user retrieve all api.")
}

const getAUser = (req,res)=> {
    res.send(`retrieve a user (${req.params.id}) api.`)
}

const createNewUser = (req,res)=> {
    res.send("user create a api.")
}

const updateUser = (req,res)=> {
    res.send("user update patch a api.")
}

const deleteUser = (req,res)=> {
    res.send("user delete a api.")
}


module.exports = {getAllUsers,getAUser,createNewUser,updateUser,deleteUser}