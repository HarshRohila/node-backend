import user from '../controllers/user';
import express from 'express';

export default (app) => {
	const router = express.Router();
    router.route('/users')
        // .get(notebook.getAllNotes)
        .post(user.createUser);

    // app.route('/notes/:noteId')
    //     .get(notebook.getNote)
    //     .put(notebook.updateNote)
	//     .delete(notebook.deleteNote);
	
	app.use('/api/v1', router);
};