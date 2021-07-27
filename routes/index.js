// General Routes
// Require Express Router
const router = require("express").Router()

// Retrive routers
const usersRoutes = require("./users")

// Routes
router.use("/users", usersRoutes)

router.use("/", function(request, response) {
    return response.send("Welcome to Adoptapet API")
})

module.exports = router