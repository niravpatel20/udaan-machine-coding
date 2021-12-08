const express = require('express');
const router = express.Router();
const Item = require('../model/Item');

router.post('/:name/:price', async (req, res) => {
    const name = req.params.name;
    const price = req.params.price;

    const item = new Item({
        name,
        price
    })

    try{
    
        await item.save();

        res.status(201).send({
            "message" : "Item created"
        })

    } catch(e){
        console.log(e);
        res.status(500).send({
            "message": "Something went wrong!"
        })
    }
})

module.exports = router;