const Ikasle = require('../models/ikasle.model');
const Taldea = require('../models/talde.model');

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.deleteIkasle = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findByIdAndDelete(req.params.id);
        
        // Encontrar todos los taldeak
        const taldeak = await Taldea.find();
        
        // Iterar sobre cada talde y eliminar el ikasle
        for (const talde of taldeak) {
            talde.ikasleak = talde.ikasleak.filter(id => id.toString() !== req.params.id);
            await talde.save();
        }
        
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
 }


exports.editIkasle = async (req, res, next) => {
    try {

        const ikasle = await Ikasle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ikasle) {
            return res.status(404).send('Ikasle not found');
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
}

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

// Gehitu beste kontroladoreak...

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.deleteIkasle = async (req, res, next) => {
    try{
        const ikasle = await Ikasle.findByIdAndDelete(req.params.id);
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
}


exports.editIkasle = async (req, res, next) => {
    try {

        const ikasle = await Ikasle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ikasle) {
            return res.status(404).send('Ikasle not found');
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
}

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

// Gehitu beste kontroladoreak...