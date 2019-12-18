import User from '../models/user';
import JSONAPIserializer from 'jsonapi-serializer';

const UserSerializer = new JSONAPIserializer.Serializer('user', {
	attributes: ['name']
});

const UserDeserializer = new JSONAPIserializer.Deserializer();

exports.createUser = (req, res) => {
	UserDeserializer.deserialize(req.body, (err, json) => {
		const newUser = new User(json);
		console.log(newUser);

		newUser.save((err, user) => {
			if (err) res.send(err);
			const serialized = UserSerializer.serialize(user);
			res.json(serialized);
		});
	});
};