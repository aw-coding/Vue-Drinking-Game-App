const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('game_rules');
  const rulesCollection = db.collection('default_rules');
  const rulesRouter = createRouter(rulesCollection);
  app.use('/api/rules', rulesRouter);

})
.catch(console.error);


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('game_rules');
  const houseRulesCollection = db.collection('house_rules');
  const houseRulesRouter = createRouter(houseRulesCollection);
  app.use('/api/houserules', houseRulesRouter)
})
.catch(console.error);





app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
