exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, youtubeName, botName, jam, tanggal, isOwner, sender, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
🏅Creator : ${ownerName}
🎗Youtube : ${youtubeName}
🤖Bot Name : ${botName}
❋۪──━━━── •-• ──━━━──❋
       _Indonesia Time_
⏰${jam}
📆${tanggal}

*SIMPEL MENU*
❋ ${prefix}sticker
❋ ${prefix}toimg
❋ ${prefix}tovideo
❋ ${prefix}ttp
❋ ${prefix}attp
❋ ${prefix}emojimix

*STORE MENU*
◪ ${prefix}menu
◪ ${prefix}addlist key@response
◪ ${prefix}dellist key
◪ ${prefix}update key@response
◪ ${prefix}jeda
◪ ${prefix}kalkulator

*CEK NAME MENU*
 • ${prefix}ffid Id Game
 • ${prefix}mlid Id/Server
 • ${prefix}pubgid Id Game
 • ${prefix}higgsid Id Game

*PROSES/DONE MENU*
⸙ ${prefix}p < reply orderan >
⸙ ${prefix}d < reply orderan >
⸙ ${prefix}setp
⸙ ${prefix}updatep
⸙ ${prefix}delsetp
⸙ ${prefix}setd
⸙ ${prefix}updated
⸙ ${prefix}delsetd

*SETBOT MENU*
❒ ${prefix}setbot Teksnya
❒ ${prefix}updatesetbot TeksBaru
❒ ${prefix}delsetbot
❒ Bot = Untuk Respon Bot

*GROUP MENU*
 • ${prefix}welcome 1/0
 • ${prefix}left 1/0
 • ${prefix}setwelcome
 • ${prefix}updatewelcome
 • ${prefix}delwelcome
 • ${prefix}setleft
 • ${prefix}updateleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink 1/0
 • ${prefix}antilinkwame 1/0
 • ${prefix}antilinkall 1/0
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setopen
 • ${prefix}updateopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}updateclose
 • ${prefix}delsetclose
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}afk
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa`
}

exports.ownmenu = (pushname, ownerNumber, prefix) => {
    return`*OWNERS MENU*
 • ${prefix}join
 • ${prefix}getlink idnya
 • ${prefix}broadcast teks
 • ${prefix}addwaktu link waktu
 • ${prefix}addsewa waktu
 • ${prefix}delsewa
 • ${prefix}listsewa`
}