const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
Client.on("ready",()=>{
    var date = new Date();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var randomjour = Math.floor(Math.random() * (6 - jour)) + jour+1;
    var randomheure = Math.floor(Math.random() * (22));
    var randomminutes = Math.floor(Math.random() * (58));
    console.log(randomjour);
    console.log(randomheure);
    console.log(randomminutes);
        if (jour === randomjour){
            if (heure === randomheure){
                if (minutes === randomminutes){
        Client.channels.cache.get("738392075770527815").send("@here Weekly Maronne Check " )
        var randomjour = Math.floor(Math.random() * (6 - jour)) + jour+1;
    var randomheure = Math.floor(Math.random() * (22));
    var randomminutes = Math.floor(Math.random() * (58));
          }  }}
    console.log("<<bot connected>>")
    setInterval(() => { 
        var test = 0
        var date = new Date();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
        if (jour === randomjour){
            if (heure === randomheure){
                if (minutes === randomminutes){
        Client.channels.cache.get("738392075770527815").send("@here Weekly Maronne Check " )
        var randomjour = Math.floor(Math.random() * (6 - jour)) + jour+1;
        var randomheure = Math.floor(Math.random() * (22));
        var randomminutes = Math.floor(Math.random() * (58));
          }  }}
    console.log("<<bot connected>>")
        },60000);
});

Client.login("OTI0NDUwNjQ4NjM0ODQ3MjQz.Ycevwg.jHPGyGEuZHZMAJ5Dwgeozx-N2Ss")