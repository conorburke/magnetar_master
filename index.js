require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = process.env.PORT;

const db = require('./db');

app.use(
	'/oracle',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
	//express will serve up production assets
	app.use(express.static('client/build'));

	//express will serve up index.html if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// app.get('/', (req, res) => {
// 	res.send({ tools: 'Await!' });
// });

//routes used to test out knex syntax

// app.get('/knex', (req, res) => {
//   db('tools').join('tool_pictures', 'tools.id', '=', 'tool_pictures.tool_id').select('tools.id', 'tool_pictures.image').where('tool_pictures.id', 1).then(rows => {
//     console.log(rows);
//     res.send(rows)
//   });
// });

// app.get('/knex/:id', (req, res) => {
//   const id = req.params.id;
//   const tools = db.select().from('tools').where({id}).then(rows => {
//     console.log(rows);
//     res.send(rows);
//   });
// });
