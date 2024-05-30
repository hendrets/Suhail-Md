const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://maronekadasperrtgb7y54w4:5hgkOW8CNiUb92w4@cluster0.udeokbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "447424867061" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447424867061";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,447xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,447424867061";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "447424867061";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_22_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2sxQWdvY0ZTMzN2Q25UNVFBOXV6eDFNYzVOZ0U4bXZlRkU2eGRkdEtqND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG5DSjRtZElRVENCU1kzQVViMXJFQVwiLFxuICBcInBob25lSWRcIjogXCIyNTc4MGQ4Ny0zOTYzLTRlNzEtOWI4Mi04YWM3OGVjMzM0YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICA2MCxcbiAgICAgIDExNCxcbiAgICAgIDQ5LFxuICAgICAgMTg1LFxuICAgICAgMjQ1LFxuICAgICAgMjUsXG4gICAgICAyMyxcbiAgICAgIDEwMCxcbiAgICAgIDIyNSxcbiAgICAgIDIwOCxcbiAgICAgIDQ3LFxuICAgICAgMTk1LFxuICAgICAgNzQsXG4gICAgICAxMzIsXG4gICAgICA2MCxcbiAgICAgIDI0NSxcbiAgICAgIDM3LFxuICAgICAgMTY2LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgNzMsXG4gICAgICAxNzUsXG4gICAgICA5OCxcbiAgICAgIDExNixcbiAgICAgIDQ0LFxuICAgICAgMTAzLFxuICAgICAgMixcbiAgICAgIDU3LFxuICAgICAgMjUyLFxuICAgICAgMTE5LFxuICAgICAgMjQsXG4gICAgICAyMzgsXG4gICAgICAxMzUsXG4gICAgICAyMzEsXG4gICAgICA5OCxcbiAgICAgIDE3NyxcbiAgICAgIDExOCxcbiAgICAgIDgsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVHUvMm9RN2NMaHNnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVHbjhyL3psUERmTG9rajBDVnpsQ3lwbEIvWWFZR0V3Q2I1RjJrTjhoU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid29Wbk9SdmNRNkgyU3ZWR2MwT2YvQThWbUFOcHlmNXoybnNrTWh6Q2JXRE9VU1BRYmZSdjBlUktjeVkrMGd0RithNVJINVZqNzFKNHVCTTVFSlFFQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibW1KM2FldXdyNlZhMjJrdnBmSm83MHo2MElOQ29ueitFYTMrVkhiMEUrUm10bTR2QnlxMnhPeGtFNkxiSGswTDJqTzZyeVNOZksyTGhaelg3bEFUZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc0MjQ4NjcwNjE6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCI2ZnQzXCIsXG4gICAgXCJsaWRcIjogXCIzOTY5ODcxODI5MDA0NTo0MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzQyNDg2NzA2MTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDY4MTQ1XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝞖𝙐𝞜𝙏𝞢𝞒",
  packname: process.env.PACK_NAME || "𝞖𝙐𝞜𝙏𝞢𝞒",
  botname : process.env.BOT_NAME  || "𝞖𝙐𝞜𝙏𝞢𝞒",
  ownername:process.env.OWNER_NAME|| "𝞖𝙐𝞜𝙏𝞢𝞒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DJwc34NaWmhXmDxEeh6YUEmm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "3e57046161ccf9ac1f4b9e03828a5fe9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
