const express = require('express')
const router = express.Router()
const menu = require('./food')

router.post("/food", async (req, res)=>{
    try {
        await menu.create({
            category: req.body.category,
            name: req.body.name,
            url: req.body.url,
            desc: req.body.desc,
            price: req.body.price
        })
        // await user.create({
        //     name: "Ammar",
        //     pass: "1234"

        // })
        res.json({success: true})
    } catch (error) {
        console.log(error)
        res.json({success: false})
    }
})

module.exports = router;