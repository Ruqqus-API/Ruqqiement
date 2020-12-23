import sentiment from "./sentiment/index.js";
import Ruqqus from "ruqqus-js";
import dotenv from "dotenv";
dotenv.config();

const client = new Ruqqus.Client({
    id: process.env.ID,
    token: process.env.TOKEN,
    refresh: process.env.REFRESH
});

client.on("comment", async comment => {
    console.log(`${comment.author.username},${comment.guild.name},${(await sentiment(comment.content.text)).positivityScore}`);
});

export { };