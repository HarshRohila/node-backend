import user from '../controllers/user';
import express from 'express';

export default (app) => {
	const router = express.Router();
    router.route('/users')
        .get(user.getAllUsers)
		.post(user.createUser);

	router.route('/users/:userId')
	    .delete(user.deleteUser);
	
	app.use('/api/v1', router);
};