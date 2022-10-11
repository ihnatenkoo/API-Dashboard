import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
	console.log('users middleware');
	next();
});

userRouter.post('/login', (req, res) => {
	res.send('Login');
});

userRouter.post('/register', (req, res) => {
	res.send('Register');
});

export { userRouter };
