import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const commentsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
});

const CommentModel = mongoose.models.comments || mongoose.model('comments', commentsSchema);

export default CommentModel;
