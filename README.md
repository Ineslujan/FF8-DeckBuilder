# Deck Builder - Final Fantasy VIII

This server side website is the famous Final Fantasy VIII mini game : Triple Triad.

Triple Triad is a card board game. For the rules, go check them in the game.

You can see the details of a card. Each card contains some attributes :
- 4 values (North, East, South, West)
- the name
- the element (if exist)
- the level

You can manage the cards :

The menu "Recherche".
It allows you to search cards with several options :
- by element
- by level
- by value
- by name

The menu "Decks".
It allows you to see your actual deck. 
To add a card in this deck, click on the "+" on the top right of the card.
You can remove one with the "-" only by this menu
The maximum is 5 cards in the deck.

NB : The website isn't responsive.

## Main technology & concept

- NodeJS
- Express
- EJS
- NPM
- PostgreSQL
- HTML
- CSS
- Session
- router
- SQL

## How to see the project

Direct link : In the "About" section on the right

## How to run

### <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="drawing" height="17"/> PostgreSQL <sub><em>(or your favorite SGBD)</em></sub>

<details>
<summary>Installer...
</summary>
- Download installer :
    - https://www.postgresql.org/download/

- CLI Ubuntu
    - https://www.postgresql.org/download/linux/ubuntu/

</details>

- Create database with postgreSQL

```cmd
CREATE DATABASE <dbname> OWNER <user>;
```

- Create tables and datas with the "create_db.sql" in data folder

```cmd
psql -U <user> -d <dbname> -f data/create_db.sql
```

### 🗳 Environment variable

- Create `.env` following the `.env.example`

### <img src="https://nodejs.org/static/images/favicons/favicon.ico" alt="drawing" height="17"/> The project runs with Node.js

<details>
<summary>Installer...
</summary>

- Download installer :
    - https://nodejs.org/en/

- CLI Ubuntu
```cmd
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```
```cmd
sudo apt-get install -y nodejs
```
</details>

### <img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" alt="drawing" height="17"/> Project dependancies installation
```cmd
npm i
```

Launch on Production mode
```cmd
npm start
```

<u>Included Packages :</u>
- dotenv
- ejs
- express
- express-session
- nodemon
- pg


### 👀 Enjoy the website
    
```
http://localhost:PORT
```





