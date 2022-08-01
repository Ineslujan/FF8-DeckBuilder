const dataMapper = require('../dataMapper.js');

const searchController = {
    searchPage: (req, res) => {
        res.render('search');
    },
    elementCards: async (req, res) => {
        const element = req.query.element
        console.log(element);

        try {
            const results = await dataMapper.getElementCard(element)
            res.render('searchList', {
                cards: results,
                title: `Liste des cartes élément ${element}`
            });
        }
        catch (err) {
            console.error(err);

        }

    },
    levelCards: async (req, res) => {
        const level = req.query.level
        console.log(level);

        try {
            const results = await dataMapper.getLevelCards(level)
            res.render('searchList', {
                cards: results,
                title: `Liste des cartes level ${level}`
            });
        }
        catch (err) {
            console.error(err);

        }

    },
    valuesCards: async (req, res) => {
        const valuee = req.query.value
        const direction = req.query.direction
        console.log(valuee, direction);

        try {
            const results = await dataMapper.getValuesCards(direction, valuee)
            res.render('searchList', {
                cards: results,
                title: `Liste des cartes avec la valeur ${direction} = ${valuee}`
            });
        }
        catch (err) {
            console.error(err);

        }

    },

    namesCards: async (req, res) => {
        const name = req.query.name.toLowerCase()
        console.log(name);

        try {
            const results = await dataMapper.getNamesCards(name)
            console.log(results);
            res.render('searchList', {
                cards: results,
                title: `Liste des cartes dont le nom contient "${name}"`
            });
        }
        catch (err) {
            console.error(err);

        }

    },

};

module.exports = searchController;