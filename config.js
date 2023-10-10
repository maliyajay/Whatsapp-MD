/*
WHATSAPP BOT BY M4LiY4 
WHATSAPP - 94771272638
SUPPORT GROUP - https://t.me/techposting_AL
YOUTUBE - https://youtube.com/@m4liy419?si=qUgm7mtPZF-26zfw
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;96A22AxQ#k28Nq1-k-GNMxlAf2q7jqPMjzAybK5pUXprW2wjl7TA' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://malindu_3m74_user:2vXzF5S2ziF2Z39U5RyQu3ZwXjHNdYvP@dpg-ckinhnke1qns73c5kpcg-a.frankfurt-postgres.render.com/malindu_3m74'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94771272638'

global.OWNER_NAME = 'M4LiY4'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'M4LiY4'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@M4LiY4 🤹‍♂️' //sticker

global.FOOTER = 'M4LiY4 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'M4LiY4  © 2023' // Caption

global.ALIVELOGO = '' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: M4LiY4" //ur yt chanel name
global.socialm = "GitHub: malinduseminda" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

