
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caxtontechnologies291@gmail.com";
global.location = "Nairobi,Kenya.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photos.app.goo.gl/pKS4Aohdbc667yps7";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "254798033844";
global.owner = process.env.OWNER_NUMBER || "254798033844";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://photos.app.goo.gl/pKS4Aohdbc667yps7";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJWK0dENTN0dHFjcHJmeVZ2K0R2UTMxTGV6WWNMczd6cHB2R1ZCZTFrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEo2WlNUOVlDSEQ5MERJN0tXNk9GbTlDVVlRNWV5cnRUUmNRaXZUeC93bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QnRYaURPM0kxQ2pEbk1ya0pqQUNhdDFyL0JrcTEvay9MK3pkSkhiNFdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbHhDa0wvVG80aXFzaGMzMHF4YUFnbE8xdjh6NDMzSFcreUE5dFcrZ0E4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEVmRVcW9oQkZkVjBUbVQvR0xrNWVmWXNXTWVvZUw2Q1NUd21ibFkvbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErbEhrNUFpa0VFVWZnNmxiMUV2dE5QYlhycmR3dDlnb3hodHhZMTB6Um89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdZTHlrU2w5cWx2UmlwN29uSERjUlVnRGZqNml0TVBkZStjUlRkODZHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWo2c29PdWpvTVhFLzZoSFEvZmV1aWFudEcrQXl0U1VTSy9KNXZNa1RoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVkZktiRnVpcXRSNTl6TnRLbSttdk9GMTVPMlhRQmJBNnFMWVpicXdwRUxYbmtlT2V0ZUgrQ0tMcEV5d0djc3NNb09zd1lNNmlRV1pTdXVFdXlENGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJMZ3BBL2FxK3g4OWczUDVOQjdneWZJaTUycm90alpPQTQ3SW9qbDJJU3hBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFOVVWczNWcFRldTI3NEFuM3Q3SmVBIiwicGhvbmVJZCI6ImEyMmY3ZWNlLTk0NGUtNGY1My1hMTIyLWVmMjdiMTM2M2NkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2TG84QlR5SVArcXJ2WHVRNGtORlZZYXB2S1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEYwamxiTitjMWRmUktXaEJUU01lMzFRbGtBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRIQTM0NldKIiwibWUiOnsiaWQiOiIyNTQ3OTgwMzM4NDQ6MzVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hVjI3QUZFUHJkanJVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFvOERlTzRDN3JLMkh4L3k4WHRHWkd2eWNjaFVnU09mVGNKTHlvdFlzRDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inkvck9qcFpoTld0akRhVEtMSVFpbDBORk55YTZqT3RGa2JPY1BMZUJXUWY1ZXR6QjlNbGJaSnNXRnh6NGNhM2pzZXZDSThnNXBkU3VobGxxTTNrUUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsVXFWaHVSVDZtblRGL0UrWjBDdmsyMDU5dTMzU2dMSlJkYmdzcnBYK2l1OVNSRHRBOWtuZDhlaEp4WnpmUCtkWE1WcnZiUmtKdVhMZlBBTkdnNHBpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5ODAzMzg0NDozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRS1BBM2p1QXU2eXRoOGY4dkY3Um1ScjhuSElWSUVqbjAzQ1M4cUxXTEErIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDAzMjA3fQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Caxton Derick*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️Caxton Derick",
  botname: process.env.BOT_NAME || "Caxton Derick",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
