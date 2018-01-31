const Discord = require('discord.js');
const bot = new Discord.Client();


const robot = 'New User Bot';
const newUserRole = 'pups';

// Always remove
const token = '';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
bot.on('ready', () => {
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log('-------BEEP BOP BEEP-----');
    console.log(' ');
    process.stdout.write(robot+' online');
    setTimeout(()=>{process.stdout.write('.')},400);
    setTimeout(()=>{process.stdout.write('.')},1000);
    setTimeout(()=>{process.stdout.write('.')},1400);
    
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    
    // Get specific role instance by name
    let role = member.guild.roles.filter((role)=>{
        return role.name.toLowerCase() === newUserRole.toLowerCase()
    });
    
    // Error response
    let error;
    
    // If role is found, add role to new user, else create error response
    role.first() ? member.addRole(role.first().id) : error = 'Failed to add role';
    
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'general');
    
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to The Doghouse, ${member} :wolf:`);
    
    /** If error occured **/
    // Send the message to a designated channel on a server:
    const adminChannel = member.guild.channels.find('name', 'admin');
    error ? adminChannel.send(`Failed to automatically add ${member} to role: #${newUserRole}, do it yourself!`): null;
});

// Log our bot in
bot.login(token);


