import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use('/hello', (req, res, next) => {
	console.log('hello middleware');
	next();
});

app.get('/hello', (req, res) => {
	res.send('Hello');
});

app.use('/users', userRouter);

app.listen(port, () =>
	console.log(`Server started on https://localhost:${port}`)
);
