module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "SHAAN KHAN",
	description: "THIS BOT WAS MADE BY MR SHAAN KHAN",
	commandCategory: "CHANGE GROUP EMOJI", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("BOSS SAATH ME EK EMOJI DALO JO LAGANA HA 😐✌️", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`BOSS MAINE GROUP KA EMOJI BADAL DIYA 👉 ${emoji}\n━━━━━━━━━━━━━━━━━━━━━━━\nOWNER  𒁍 MR SHAAN-KHAN 🌺`, event.threadID, event.messageID));
}
