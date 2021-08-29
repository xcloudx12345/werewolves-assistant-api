const Config = require("../index");

module.exports = {
    mongodb: {
        url: "mongodb+srv://xcloudx:9627008@cluster0.cstwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        databaseName: Config.db.name,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    migrationsDir: "src/db/migrations",
    changelogCollectionName: "changelog",
};
