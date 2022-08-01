const dataMapper = require('../dataMapper.js');

const deckController = {

    checkDeckSet: (req, res, next) => {
        // si on test un objet avec un if, celui-ci retournera VRAI s'il existe et FAUX s'il est undefined ou égal à null
        // Donc if(req.session.bookmarks) => SI req.session.bookmarks existe ALORS VRAI
        // ET if(!req.session.bookmarks) => SI req.session n'existe PAS ALORS VRAI et donc on crée le tableau

        // 1 - On s'assure toujours d'avoir un tableau dans req.sessions qui porte le nom de bookmakrs
        if (!req.session.bookmarks)
            req.session.bookmarks = [];

        next();
    },

    displayDeck: (req, res) => {
        res.render('deck', {
            cards: req.session.bookmarks,
            title: 'Cartes du deck'
        })

    },

    addToDeck: async (req, res) => {
        const id = req.params.id;
        if (req.session.bookmarks.length < 5) {

            // Est-ce qu'un tableau dans req.sessions porte le nom de bookmakrs ?
            if (!req.session.bookmarks)
                req.session.bookmarks = [];

            // est-ce qu'une card avec l'id passé en params est déjà présente ou non dans session.bookmarks ?
            const cardInBookmarks = req.session.bookmarks.find(f => {
                return f.id === Number(id)
            });

            // Si cardInBookmarks est undefined (donc n'existe pas) alors on l'ajoute
            if (!cardInBookmarks) {
                const card = await dataMapper.getOneCard(id);
                req.session.bookmarks.push(card);
                // Je l'ajoute 
            }
            console.log(req.session.bookmarks);
            // Dans tous les cas on redigie vers deck
            res.redirect('/deck');
        }
        else {
            res.render('deck', {
                cards: req.session.bookmarks,
                title : `5 cartes maximum s'il vous plaît`
            });
        }
    },
    removeToDeck: (req, res) => {
        const id = req.params.id;
    
        req.session.bookmarks = req.session.bookmarks.filter(b => b.id !== Number(id));
    
        res.redirect('/deck');
      }
};

module.exports = deckController;