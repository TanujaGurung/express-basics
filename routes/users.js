const express =  require("express")

const router = express.Router()


router.get("/", (req,res)=>{
    res.send("usersList")
})

router.get("/newUser", (req,res)=>{
    res.send("new user Form")
})

router.get("/:id", (req,res)=>{
    res.send(`get users with ${req.params.id}`)
})

module.exports = router
