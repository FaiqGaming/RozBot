const {RichEmbed} = require('discord.js');
exports.run = (client, message) => {

    message.channel.startTyping();
	const embed = new RichEmbed()
        .addField( "Pong!" ,"Time of response " + `${client.pings[0]} ms`)
        .addField("Message trip: ", pingMessage.createdTimestamp - message.createdTimestamp)
        .addField("API Latency: ", this.client.ping)
		.setColor('#FAFF00');
    message.channel.sendMessage(":hourglass_flowing_sand:")
    .then(message => {message.edit({ embed })});
    message.channel.stopTyping();
    
}