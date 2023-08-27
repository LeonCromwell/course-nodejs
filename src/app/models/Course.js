
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const courseSchema = new Schema({
    id: ObjectId,
    name: {type: String, maxLength: 255},
    description: {type: String},
    image: {type: String},
    creatAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});


export  const Course = mongoose.model("Course", courseSchema)

