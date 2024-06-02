import mongoose from 'mongoose';

const { Schema } = mongoose;

const WorkSchema = new Schema({
    img: {
        type: String,
        required: true,
        trim: true,
    }
});

const PostModel = mongoose.models.pictures || mongoose.model('pictures', WorkSchema);

export default PostModel;
