import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            'mongodb+srv://mailyhai814:992003Hai@cluster1.rh5edte.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
}
