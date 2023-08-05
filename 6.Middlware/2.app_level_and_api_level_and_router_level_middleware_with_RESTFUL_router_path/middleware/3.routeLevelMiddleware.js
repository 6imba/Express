const getAllMware = (req,res,next) => {
    console.log("Route level middleware_1 for get_all_users_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

const getOneMware = (req,res,next) => {
    console.log("Route level middleware_1 for get_a_user_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

const createOneMware = (req,res,next) => {
    console.log("Route level middleware_1 for create_a_user_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

const updateOneMware = (req,res,next) => {
    console.log("Route level middleware_1 for update_a_user_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

const deleteOneMware = (req,res,next) => {
    console.log("Route level middleware_1 for delete_a_user_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

const aboutRouteLevelMware = (req,res,next) => {
    console.log("Route level middleware_1 for about_route!")
    console.log('----------------------------------------------------------------------------------------------')
    next()
}

module.exports = {getAllMware,getOneMware,createOneMware,updateOneMware,deleteOneMware,aboutRouteLevelMware}