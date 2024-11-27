const Taldea = require('../models/talde.model');
const Ikasle = require('../models/ikasle.model');


exports.createTalde = async (req, res, next) => {
    try {
        console.log(req.body);
        const talde = new Taldea(req.body);
        const savedTalde = await talde.save();
        res.status(201).json(savedTalde);
    } catch (error) {
        next(error);
    }
};


exports.assignIkasleToTalde = async (req, res, next) => {
    try {
        const { taldeId, ikasleId } = req.body;
        const talde = await Taldea.findById(taldeId);
        const ikasle = await Ikasle.findById(ikasleId);


        if (!talde || !ikasle) {
            return res.status(404).json({ message: 'Taldea edo ikaslea ez da aurkitu' });
        }


        if (talde.ikasleak.some(id => id.toString() === ikasleId.toString())) {
            return res.status(400).json({ message: 'Ikaslea jada taldean zegoen' });
        }


        talde.ikasleak.push(ikasleId);
        await talde.save();


        res.json(talde);
    } catch (error) {
        next(error);
    }
};


exports.getTaldeak = async (req, res, next) => {
    try {
        const taldeak = await Taldea.find().populate('ikasleak')
        res.json(taldeak);
    } catch (error) {
        next(error);
    }
};
