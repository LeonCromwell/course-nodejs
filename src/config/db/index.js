import mongoose from 'mongoose';


export async function  connect() {
   try {
    await mongoose.connect('mongodb://127.0.0.1:27017/F8_Education_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected!");


   } catch (error) {
    console.log(error);
   }
}


