const axios = require("axios");
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "!";

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "bracket") {
        console.log(message.author.username + " asked for the bracket");
        axios({
            method: "get",
            url: "https://api.challonge.com/v1/tournaments.json",
            auth: {
                username: config.challongeUsername,
                password: config.challongeToken
            }
        })
            .then(response => {
                message.reply("Latest tournament: " + response.data.pop().tournament["full_challonge_url"]);
            })
            .catch(error => {
                console.log("ERROR HAS OCCURRED\n");
                console.log(error);
            });
    }
});

client.login(config.discordToken);
console.log("BracketBot started");
