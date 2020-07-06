const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const MessageAttachment = Discord.MessageAttachment;

client.once('ready', () => {
  client.user.setActivity("noodles explode in the microwave", { type: 'WATCHING' });
})

client.on('message', (message) => {
  if (message.content === "smart fridges should be able to scream") {
    message.channel.send("here goes aakenuvbngasnergrvtjgsbjdrfhiavn4ermsgsnwrvgfhdjxfngvgegxdcfvgfsnhdsgcdbgrvjscnhfbr", {tts: true});
  }else if(message.content === "open the potato compartment") {
    message.channel.send("It's called a mouth.", {files: ["https://i.ibb.co/YDqGj4N/potates.jpg"]});
  }else if(message.content === "nice face") {
    message.channel.send("He's inside the fridge and can't get out.", {files: ["https://i.ibb.co/hgvmjZP/nice-face.jpg"]});
  }else if(message.content === "fridge send a pic") {
    message.reply("hey it's me", {files: ["https://i.ibb.co/D5xNXmf/fridge.jpg"]});
  }else if(message.content === "i love baked potatoes") {
    if(message.member.voiceChannel) {
      message.member.voiceChannel.join().then(function(connection){
        const dispatcher = connection.playStream(fs.createReadStream("bakedpotate.webm"), {type: "webm/opus", volume: 1});
        message.channel.send("Now playing 'Baked Potato'. I'm coming for you, Rythm.");
        dispatcher.on('end', () => {
	        connection.disconnect();
          message.channel.send("That was fun. I wonder if the baked potato died.");
        });
        dispatcher.on('error', console.error);
      });
    } else {
      message.reply("You need to go in a voice channel. OR ELSE YOU'RE GOING IN MY ICE CUBE CRUSHER!");
    }
  }else if(message.content === "is my face nice"){
    const user = message.mentions.users.first() || message.author;
    message.reply("yeah", {files: [user.displayAvatarURL]});
  }else if(message.content === "fridge help me please i cant breathe" || message.content === "fridge" || message.content === "fridge help" || message.content === "!fridge" || message.content === "how do you use fridge") {
    message.channel.send("Fridge has come to help someone.\nElmo has come to eat someone.\n-----\n'smart fridges should be able to scream' makes me scream\n'open the potato compartment' opens my potato compartment\n'nice face' shows you the guy trapped inside of me\n'is my face nice' shows you your avatar\n'i love baked potatoes' sings a song\n'i want some milk' shows you milk\n'put a banana in the fridge' reminds you that you're not supposed to put bananas in the fridge\n'buy fridge+' lets you purchase Fridge+ or Ghost Fridge\n'fridge help me please i cant breathe' shows you this (you can also use 'fridge help' or '!fridge')");
  }else if(message.content === "i want some milk"){
    message.channel.send("M I L K", {files: ["https://i.ibb.co/4MgvtTP/Fresh-milk-on-wooden-table-in-morning-light-and-nature-background.jpg"]});
  }else if(message.content === "put a banana in the fridge"){
    message.channel.send("Why would you? Bananas actually go bad faster in the fridge. A simple explanation is that bananas grow in warm areas, so putting them in a cooler area makes them go bad faster. Lol.");
  }else if(message.content === "buy fridge+"){
    message.channel.send({embed: {"title":"💸 Buy Fridge+/Ghost Fridge","description":"Thanks for choosing to financially support Fridgebot! There are two premium subscriptions: Fridge+ if you want to personalize Fridgebot, and Ghost Fridge if you want a completely custom bot, hosted on the Fridgebot infrastructure.","fields":[{"name":"Subscribe","value":"Fridge+ costs 2$ a month\nGhost Fridge costs 3$ a month\n[👉 Learn more](https://gumroad.com/l/fridgeplus)"}],"footer":{"text":"✔️ Your payment will be securely processed by Gumroad"},"image":{"url":"https://i.ibb.co/2jrzh2P/Fridge-Illustration.png"}});
  }
});

client.login(process.env.THE_KEY_TO_THE_LOCKED_FRIDGE);
