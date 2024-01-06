import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

// Define Schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Create Schema
const accountSchema = new Schema(
    {
        id: ObjectId,
        username: { type: String, maxLength: 255, required: true, unique: true },
        password: { type: String, maxLength: 255, required: true },
        name: { type: String },
        email: { type: String },
        phone: { type: String },
    },
    {
        collection: 'accounts',
    },
    {
        timestamps: true,
    },
);

// Add plugin
accountSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: ['find', 'findOne', 'finDeleted', 'count', 'countDeleted'],
});

// Custom query helpers
export const Account = mongoose.model('Acount', accountSchema);
