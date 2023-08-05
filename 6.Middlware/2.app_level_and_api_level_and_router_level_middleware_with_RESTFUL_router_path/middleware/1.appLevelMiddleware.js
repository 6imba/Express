const appLevelMiddleware_1 = (req,res,next) => {
    console.log("App level middleware_1 for all http request!")
    next()
}

const appLevelMiddleware_2 = (req,res,next) => {
    console.log("App level middleware_2 for all http request!")
    console.log('---------------------------------------------------')
    next()
}

module.exports = {appLevelMiddleware_1,appLevelMiddleware_2}