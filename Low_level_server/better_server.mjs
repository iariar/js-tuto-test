import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'


const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(morgan('dev'));

const db = [];

console.log('here');
app.post('/todo', (req, res) =>
{
	const newTodo = {
		id: Date.now(),
		text: req.body
	}
	console.log('here');
	console.log(req.body);
	db.push(newTodo);
	res.json(newTodo);
})

app.get('/todo', (req, res) =>
{
	res.json(db);
})

app.listen(8000, () =>
{
	console.log('Server listening on localhost:8000');
})