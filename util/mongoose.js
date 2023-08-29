const mongoose = {
    multibleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map((item) => item.toObject());
    },

    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};

export default mongoose;
