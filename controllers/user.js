import User from '../models/user';
import JSONAPIserializer from 'jsonapi-serializer';

const UserSerializer = new JSONAPIserializer.Serializer('user', {
	attributes: ['name']
});

const UserDeserializer = new JSONAPIserializer.Deserializer();

exports.createUser = (req, res) => {
	UserDeserializer.deserialize(req.body, (err, json) => {
		const newUser = new User(json);
		//save to database
		console.log(newUser);
		const serialized = UserSerializer.serialize(newUser);
		res.json(serialized);
	});
    
	
    // newUser.save((err, user) => {
    //     if (err) {
    //         res.send(err);
    //     }

    //     res.json(user);
    // });
};