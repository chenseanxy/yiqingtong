require('dotenv').config();

const username = process.env.NW_USERNAME;
const password = process.env.NW_PASSWORD;

if(username === "" || password === ""){
    throw Error("Username or password not configured");
}

module.exports = {
    username, password
};
