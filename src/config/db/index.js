import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb+srv://mailyhai814:992003Hai%40@cluster1.rh5edte.mongodb.net/F8_Education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
}
