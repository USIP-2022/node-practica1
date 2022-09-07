const app = require("./app");
const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
    console.log(`App running on ${host}:${port}`);
});