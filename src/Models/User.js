import mongoose from '../database';

const User = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    active: Boolean
});

export default mongoose.model('User', User);  