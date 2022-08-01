const dataMapper = require('../dataMapper.js');

const cardController = {
    detailCard: async (req, res) => {
        const id = Number(req.params.id);

        try {
            const results = await dataMapper.getOneCard(id)
            res.render('cardDetail', {
                card: results,
            });
        }
        catch (err) {
            console.error(err);

        }

    },

    };

    module.exports = cardController;

    