import mongoose from "mongoose";

const MentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cover:
    {
        type: String,
        required: true,
    },

});

const Mentor = mongoose.model('Mentor', MentorSchema);

export default Mentor;
