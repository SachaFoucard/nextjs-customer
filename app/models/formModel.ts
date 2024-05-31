import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const PostSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

const PostModel = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default PostModel;
