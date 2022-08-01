const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const cardController = require('./controllers/cardController');
const deckController = require('./controllers/deckController');


router.get('/', mainController.homePage);

// router.get('/:id', cardController.detailCard);
router.get('/detail/:id', cardController.detailCard);


router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.elementCards);
router.get('/search/level', searchController.levelCards);
router.get('/search/values', searchController.valuesCards);
router.get('/search/name', searchController.namesCards);


router.use('/deck', deckController.checkDeckSet);
router.get('/deck', deckController.displayDeck);
router.get('/deck/add/:id', deckController.addToDeck);
router.get('/deck/remove/:id', deckController.removeToDeck);


module.exports = router;

// /search/element?element=glace