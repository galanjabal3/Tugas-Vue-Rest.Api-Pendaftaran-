module.exports = {
    Host: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "pendaftaran",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
};