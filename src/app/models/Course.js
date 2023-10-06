import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

// Define Schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create Schema
const courseSchema = new Schema(
    {
        id: ObjectId,
        name: { type: String, maxLength: 255 },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugin
mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: ['find', 'findOne', 'finDeleted', 'count', 'countDeleted'],
});

// Custom query helpers
export const Course = mongoose.model('Course', courseSchema);
