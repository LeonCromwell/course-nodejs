import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
}
