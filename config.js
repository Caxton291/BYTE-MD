
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "technologies291@gmail.com";
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
global.sudo = process.env.SUDO || "254700614387";
global.owner = process.env.OWNER_NUMBER || "254700614387";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBpV3g3L3lPR0JoOFhJV0xZRWg1Z1ltSGh5Z3BBT0NxMzRtZ0liRGZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1gzekhRZDY3U1dXdVRDeTFScDg0UVZ5Q3Z4OTl6YzAyNGk4MnByWU5UTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR2hvbDRqWVp3NlRKdmNZcnZQRUZpMHBKcGNtdHAzTFhNdWxBcm9xajJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURzcrSmVqclNlWGcrN21lbEE0TTQ4SGVRaG9DTHZhN3Y3UVNIY2poUjBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBSE5oakY5aUhUcHhXcXdiMlJzUEdlRk96L2dZVkhraXpsb1pDTDgxMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKaE81OGgvWDdQbEJ6aTFKd3hqdDJyTW05QWpGZzI2OFZkR1pRRWNjUkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hPMnhPZEl1c3lOZHVqOWEvUFYzWTM2bmt3Tk10WGNsSW1vQ0NpRk0zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic050OWR2TE1xVUt1U1MvUTIrOElST3hZTitENDMwcGpMSzYwUzU0YnlEST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5aZnRxVWR1Y3dDU0RpcVlJUUMzSHd3SHY5aWR6WDJ2eFpuR3JxS0YzcmE4cFBWQU9YVCs5RkZQYnR1WlZqME93S0kxTmI2R3B1TzYzMDNFZlJ1ZENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6InRxYXZvYTZFakdJU2t1WlhUUkdaTWE4VVhuQ1hsak5xZEtaSlBIYUhKVzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzAwNjE0Mzg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ2ODY4QzBDNzk1ODBGOUJERUFCMDQ0MkI0OTc5RDkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwMDQ2Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwMDYxNDM4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RjFBRkJENTUwNUEzQkZFOTIwQUI3M0FCMzJBQkFGNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDA0Njc5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwYXFCaW1vMlJDZWVFS0lURDhhWUlnIiwicGhvbmVJZCI6ImY3ZjJhNzIzLWExOWEtNDNmOC05ZmRiLTFkMTFjN2QyNzliNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVanRnTkFHZmoxdTlZMkx3YnpUVHpuNVNVd0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndVT0dNRzZRbTB6RGk3Q05HaWp4ckxUYnVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZUTkwzV1oyIiwibWUiOnsiaWQiOiIyNTQ3MDA2MTQzODc6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFpbnN3aXRjaCBLZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhqN2VFQ0VMZnBqclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMnpHRERoUWhIaWxKVlQyYWRWdDVtMjBEVFE5dVdpcTBOMkNENURScWpHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGRJbGlicFBCSnJlVHNoakgxamM1a280R04yS2ttZ2YxT3hSOVIvQ0Z1NFZLMUlMSU9qVGsvYlhXN3E0UkhXVDJJY3hiZ3JlUUFQQTQ4MEtsUm5iQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpNR1NIZ0NDb0U1SC81QUpWZFZkanVMNmczbXA2cFBYdFQ0a2NRMDNQcTlkR0x2WEZiZmlPK2VaVDQxWmtUclFRVWYzN3Rsb1BvN3I5c3RTZ085SER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzAwNjE0Mzg3OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRzeGd3NFVJUjRwU1ZVOW1uVmJlWnR0QTAwUGJsb3F0RGRnZytRMGFveGsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwMDQ2NzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHl2In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*mainswitch*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️ mainswitch",
  botname: process.env.BOT_NAME || "kkkkk",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
