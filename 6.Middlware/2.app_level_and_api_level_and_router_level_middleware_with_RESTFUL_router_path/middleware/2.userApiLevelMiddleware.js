const apiLevelMiddleware_1 = (req,res,next) => {
    console.log("Api level middleware_1 for user api!")
    next()
}

const apiLevelMiddleware_2 = (req,res,next) => {
    console.log("Api level middleware_2 for user api!")
    console.log('--------------------------------------------------------------------------')
    next()
}

module.exports = {apiLevelMiddleware_1,apiLevelMiddleware_2}