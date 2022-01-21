const express = require('express');
const mongoose = require('mongoose');

const gmailSchema = require('../schemas/gmailSchema');

const router = express.Router();
const Sihab = new mongoose.model('Sihab', gmailSchema);

router.get('/find', async (req, res) => {

    try{
        const data = await Sihab.findOne({condition:'no'})
        res.status(200).json({
            data,
        })
    }catch(err){
        res.status(500).json({
            err,
        })
    }
    
});

router.get('/update/:pass', async (req, res) => {
    const data = await Sihab.updateOne(
        { condition: 'no' },
        { condition: 'good', password: req.params.pass }
    );
    if (data.modifiedCount > 0) {
        res.json({ data: 'modified' });
    } else {
        res.json({
            data: 'not found',
        });
    }
});

module.exports = router;
