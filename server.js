const { ShardingManager } = require('discord.js');
const express = require('express');
const manager = new ShardingManager('./bot.js', { token: process.env.THE_KEY_TO_THE_LOCKED_FRIDGE});
const server = express();

server.all('/', (req, res)=>{
    res.send("Fridge is alive! ALIVE!! https://fridgebotby.cedric.kim/");
});

server.listen(3000, ()=>{console.log("Fridge Server is ready")});

manager.spawn();
manager.on("shardCreate", shard => console.log(`Launched shard ${shard.id}`));
