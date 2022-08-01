const database = require('./database');

const dataMapper = {

    getAllCards: function (callback) {
        const query = {
            text: `SELECT * FROM "card";`
        };
        database.query(query, callback);
    },

    getOneCard: async (id) => {
        const query = `SELECT * FROM "card" WHERE "id" =$1;`
        const value = [id];
        return (await database.query(query, value)).rows[0];
    },

    getElementCard: async (element) => {
        const query = `SELECT * FROM "card" WHERE "element" =$1;`
        const value = [element];
        return (await database.query(query, value)).rows;
    },
    getLevelCards: async (level) => {
        const query = `SELECT * FROM "card" WHERE "level" =$1;`
        const value = [level];
        return (await database.query(query, value)).rows;
    },
    getValuesCards: async (direction, valuee) => {
        const query = `SELECT * FROM "card" WHERE "value_${direction}" =$1;`
        const value = [valuee];
        return (await database.query(query, value)).rows;
    },
    getNamesCards: async (name) => {
        const query = `SELECT * FROM "card" WHERE "name" ILIKE $1;`
        const value = [`%${name}%`];
        console.log(value,query);
        return (await database.query(query, value)).rows;
    },

};


module.exports = dataMapper;