const mongoose = require("mongoose");
const Config = require("../../../config");

exports.connect = () => {
    const mongooseOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        auth: { authSource: "admin" },
        ...Config.db.auth,
    };
    return mongoose.connect(`mongodb+srv://xcloudx:<password>@cluster0.cstwg.mongodb.net/werewolf?retryWrites=true&w=majority`, mongooseOptions);
};
