import mongoose, {
    Schema
} from 'mongoose';

const UserScheme = new Schema({
    name: {
        type: String,
        required: "What is the user's name?"
    },    
    date: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('User', UserScheme);