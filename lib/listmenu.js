const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 🧑‍🎓𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮🧑‍🎓 』
┆🕊️.self 
┆🕊️.public 
┆🕊️.join 
┆🕊️.bctext 
┆🕊️.poll 
┆🕊️.bcimage 
┆🕊️.bcvideo 
┆🕊️.creategc 
┆🕊️.setexif 
┆🕊️.userjid 
┆🕊️.setbotname 
┆🕊️.setbotbio 
┆🕊️.delppbot 
┆🕊️.shutdown 
┆🕊️.setppbot 
┆🕊️.addprem 
┆🕊️.delprem 
┆🕊️.addowner 
┆🕊️.delowner 
┆🕊️.addvn 
┆🕊️.delvn 
┆🕊️.addsticker 
┆🕊️.delsticker 
┆🕊️.addimage 
┆🕊️.delimage 
┆🕊️.addvideo 
┆🕊️.delvideo 
┆🕊️.block 
┆🕊️.unblock del 
┆🕊️.leavegc 
┆🕊️.pushcontact 
┆🕊️.pushcontactv2 
╰–––––––––––––––༓

╭––『 🤹𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮🤹 』
┆🕊️.antilink 
┆🕊️.antiwame 
┆🕊️.grouplink 
┆🕊️.invite 
┆🕊️.ephemeral 
┆🕊️.delete 
┆🕊️.setppgroup 
┆🕊️.delppgroup 
┆🕊️.setname 
┆🕊️.setdesc 
┆🕊️.add 
┆🕊️.kick 
┆🕊️.promote 
┆🕊️.demote 
┆🕊️.hidetag 
┆🕊️.totag 
┆🕊️.tagall 
┆🕊️.editinfo 
┆🕊️.opentime 
┆🕊️.closetime 
┆🕊️.resetlink 
┆🕊️.getbio 
┆🕊️.vote 
┆🕊️.upvote 
┆🕊️.downvote 
┆🕊️.checkvote 
┆🕊️.delvote 
┆🕊️.autostickergc 
┆🕊️.antilinkgc 
┆🕊️.antiwame 
┆🕊️.antilinkall 
┆🕊️.antilinktiktok 
┆🕊️.antilinkfb 
┆🕊️.antilinktwitter 
┆🕊️.antilinkig 
┆🕊️.antlinktg 
┆🕊️.antilinkytvid 
┆🕊️.antilinkytch 
┆🕊️.antivirus 
┆🕊️.antitoxic 
┆🕊️.nsfw 
┆🕊️.react 
╰–––––––––––––––༓

╭––『 📩𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮📩 』
┆🕊️.ytsearch 
┆🕊️.play 
┆🕊️.ytmp3 
┆🕊️.ytmp4 
┆🕊️.google 
┆🕊️.imdb 
┆🕊️.weather 
┆🕊️.wanumber 
┆🕊️.instaimg 
┆🕊️.instavid 
┆🕊️.fbvid 
┆🕊️.twittervid 
┆🕊️.telestick 
┆🕊️.spotify 
┆🕊️.gitclone 
┆🕊️.happymod 
┆🕊️.gdrive 
┆🕊️.pinterest 
┆🕊️.ringtone 
╰–––––––––––––––༓

╭––『 🎬𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨🎬 』
┆🕊️.tiktokgirl 
┆🕊️.tiktoknukthy 
┆🕊️.tiktokkayes 
┆🕊️.tiktokpanrika 
┆🕊️.tiktoknotnot 
┆🕊️.tiktokghea 
┆🕊️.tiktoksantuy 
┆🕊️.tiktokbocil 
╰–––––––––––––––༓

╭––『 ☃️𝐒𝐭𝐚𝐥𝐤𝐞𝐫☃️ 』
┆🕊️.igstalk 
┆🕊️.ffstalk 
┆🕊️.mlstalk 
┆🕊️.npmstalk 
┆🕊️.ghstalk 
╰–––––––––––––––༓

–『 𝐎𝐩𝐞𝐧𝐀𝐈 』
┆🕊️.openai 
┆🕊️.ai 
┆🕊️.aimage 
┆🕊️.remini 
╰–––––––––––––––༓

╭––『 💃𝐅𝐮𝐧 𝐌𝐞𝐧𝐮💃 』
┆🕊️.define 
┆🕊️.qc 
┆🕊️.lyrics 
┆🕊️.suit 
┆🕊️.math 
┆🕊️.tictactoe 
┆🕊️.fact 
┆🕊️.truth 
┆🕊️.dare 
┆🕊️.couple 
┆🕊️.soulmate 
┆🕊️.stupidcheck 
┆🕊️.handsomecheck 
┆🕊️.uncleancheck 
┆🕊️.hotcheck 
┆🕊️.smartcheck 
┆🕊️.greatcheck 
┆🕊️.evilcheck 
┆🕊️.dogcheck 
┆🕊️.coolcheck 
┆🕊️.waifucheck 
┆🕊️.awesomecheck 
┆🕊️.gaycheck 
┆🕊️.cutecheck 
┆🕊️.lesbiancheck 
┆🕊️.hornycheck 
┆🕊️.prettycheck 
┆🕊️.lovelycheck 
┆🕊️.uglycheck 
┆🕊️.pick 
┆🕊️.quotes 
┆🕊️.can 
┆🕊️.is 
┆🕊️.when 
┆🕊️.where 
┆🕊️.what 
┆🕊️.how 
┆🕊️.rate 
┆🕊️.cry 
┆🕊️.kill 
┆🕊️.hug 
┆🕊️.pat 
┆🕊️.lick  
┆🕊️.kiss 
┆🕊️.bite 
┆🕊️.yeet 
┆🕊️.bully 
┆🕊️.bonk 
┆🕊️.wink 
┆🕊️.poke 
┆🕊️.nom 
┆🕊️.slap 
┆🕊️.smile  
┆🕊️.wave 
┆🕊️.awoo 
┆🕊️.blush 
┆🕊️.smug 
┆🕊️.glomp  
┆🕊️.happy 
┆🕊️.dance 
┆🕊️.cringe 
┆🕊️.cuddle 
┆🕊️.highfive  
┆🕊️.shinobu 
┆🕊️.handhold 
┆🕊️.spank 
┆🕊️.tickle 
┆🕊️.avatar 
┆🕊️.feed 
┆🕊️.foxgirl 
┆🕊️.gecg 
┆🕊️.checkme 
┆🕊️.sound1 - sound161 
╰–––––––––––––––༓

╭––『 📸𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨📸 』
┆🕊️.aesthetic 
┆🕊️.coffee 
┆🕊️.wikimedia 
┆🕊️.wallpaper 
┆🕊️.art 
┆🕊️.bts 
┆🕊️.dogwoof 
┆🕊️.catmeow 
┆🕊️.lizardpic 
┆🕊️.goosebird 
┆🕊️.8ballpool 
┆🕊️.cosplay 
┆🕊️.hacker 
┆🕊️.cyber 
┆🕊️.gamewallpaper 
┆🕊️.islamic 
┆🕊️.jennie 
┆🕊️.jiso 
┆🕊️.satanic 
┆🕊️.justina 
┆🕊️.cartoon 
┆🕊️.pentol 
┆🕊️.cat 
┆🕊️.kpop 
┆🕊️.exo 
┆🕊️.lisa 
┆🕊️.space 
┆🕊️.car 
┆🕊️.technology 
┆🕊️.bike 
┆🕊️.shortquote 
┆🕊️.antiwork 
┆🕊️.hacking 
┆🕊️.boneka 
┆🕊️.rose 
┆🕊️.ryujin 
┆🕊️.ulzzangboy 
┆🕊️.ulzzanggirl 
┆🕊️.wallml 
┆🕊️.wallphone 
┆🕊️.mountain 
┆🕊️.goose 
┆🕊️.profilepic 
┆🕊️.couplepic 
┆🕊️.programming 
┆🕊️.pubg 
┆🕊️.blackpink 
┆🕊️.randomboy   
┆🕊️.randomgirl 
┆🕊️.hijab   
┆🕊️.chinese 
┆🕊️.indo 
┆🕊️.japanese 
┆🕊️.korean 
┆🕊️.malay 
┆🕊️.thai 
┆🕊️.vietnamese 
╰–––––––––––––––༓

╭––『 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 』
┆🕊️.goose 
┆🕊️.woof 
┆🕊️.8ball 
┆🕊️.lizard 
┆🕊️.meow 
┆🕊️.gura 
┆🕊️.doge 
┆🕊️.patrick 
┆🕊️.lovestick 
╰–––––––––––––––༓

╭––『 𝐀𝐧𝐢𝐦𝐞 』
┆🕊️.akira 
┆🕊️.akiyama 
┆🕊️.ana 
┆🕊️.asuna 
┆🕊️.ayuzawa 
┆🕊️.boruto 
┆🕊️.chiho 
┆🕊️.chitoge 
┆🕊️.cosplayloli 
┆🕊️.cosplaysagiri 
┆🕊️.deidara 
┆🕊️.doraemon 
┆🕊️.elaina 
┆🕊️.emilia 
┆🕊️.erza 
┆🕊️.gremory 
┆🕊️.hestia 
┆🕊️.hinata 
┆🕊️.husbu 
┆🕊️.inori 
┆🕊️.isuzu 
┆🕊️.itachi 
┆🕊️.itori 
┆🕊️.kaga 
┆🕊️.kagura 
┆🕊️.kakasih 
┆🕊️.kaori 
┆🕊️.keneki 
┆🕊️.kotori 
┆🕊️.kurumi 
┆🕊️.loli 
┆🕊️.madara 
┆🕊️.megumin 
┆🕊️.mikasa 
┆🕊️.mikey 
┆🕊️.miku 
┆🕊️.minato 
┆🕊️.naruto 
┆🕊️.neko 
┆🕊️.neko2 
┆🕊️.nekonime 
┆🕊️.nezuko 
┆🕊️.onepiece 
┆🕊️.pokemon 
┆🕊️.randomnime 
┆🕊️.randomnime2 
┆🕊️.rize 
┆🕊️.sagiri 
┆🕊️.sakura 
┆🕊️.sasuke 
┆🕊️.shina 
┆🕊️.shinka 
┆🕊️.shinomiya 
┆🕊️.shizuka 
┆🕊️.shota 
┆🕊️.tejina 
┆🕊️.toukachan 
┆🕊️.tsunade 
┆🕊️.waifu 
┆🕊️.animewall 
┆🕊️.yotsuba 
┆🕊️.yuki 
┆🕊️.yulibocil 
┆🕊️.yumeko 
┆🕊️.8ball 
┆🕊️.tickle 
┆🕊️.gecg 
┆🕊️.feed 
┆🕊️.animeawoo 
┆🕊️.animemegumin 
┆🕊️.animeshinobu 
┆🕊️.animehandhold 
┆🕊️.animehighfive 
┆🕊️.animecringe 
┆🕊️.animedance 
┆🕊️.animehappy 
┆🕊️.animeglomp 
┆🕊️.animeblush 
┆🕊️.animesmug 
┆🕊️.animewave 
┆🕊️.animesmille 
┆🕊️.animepoke 
┆🕊️.animewink 
┆🕊️.animebonk 
┆🕊️.animebully 
┆🕊️.animeyeet 
┆🕊️.animebite 
┆🕊️.animelick 
┆🕊️.animekill 
┆🕊️.animecry 
┆🕊️.animewlp 
┆🕊️.animekiss 
┆🕊️.animehug 
┆🕊️.animeneko 
┆🕊️.animepat 
┆🕊️.animeslap 
┆🕊️.animecuddle 
┆🕊️.animewaifu 
┆🕊️.animenom 
┆🕊️.animefoxgirl 
┆🕊️.animegecg 
┆🕊️.animetickle 
┆🕊️.animefeed 
┆🕊️.animeavatar 
┆🕊️.genshin 
┆🕊️.anime 
╰–––––––––––––––༓

╭––『 𝐀𝐧𝐢𝐦𝐞 𝐍𝐒𝐅𝐖 』
┆🕊️.hentai 
┆🕊️.gifhentai 
┆🕊️.gifblowjob 
┆🕊️.hentaivid 
┆🕊️.hneko 
┆🕊️.nwaifu 
┆🕊️.animespank 
┆🕊️.trap 
┆🕊️.gasm 
┆🕊️.ahegao 
┆🕊️.ass 
┆🕊️.bdsm 
┆🕊️.blowjob 
┆🕊️.cuckold 
┆🕊️.cum 
┆🕊️.milf 
┆🕊️.eba 
┆🕊️.ero 
┆🕊️.femdom 
┆🕊️.foot 
┆🕊️.gangbang 
┆🕊️.glasses 
┆🕊️.jahy 
┆🕊️.masturbation 
┆🕊️.manga 
┆🕊️.neko-hentai 
┆🕊️.neko-hentai2 
┆🕊️.nsfwloli 
┆🕊️.orgy 
┆🕊️.panties  
┆🕊️.pussy 
┆🕊️.tentacles 
┆🕊️.thighs 
┆🕊️.yuri 
┆🕊️.zettai 
┆🕊️.xnxxsearch 
┆🕊️.xnxxdl 
╰–––––––––––––––༓

╭––『 𝐓𝐞𝐱𝐭𝐩𝐫𝐨 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.candy  
┆🕊️.christmas  
┆🕊️.3dchristmas  
┆🕊️.sparklechristmas 
┆🕊️.deepsea  
┆🕊️.scifi  
┆🕊️.rainbow  
┆🕊️.waterpipe  
┆🕊️.spooky  
┆🕊️.pencil  
┆🕊️.circuit  
┆🕊️.discovery  
┆🕊️.metalic  
┆🕊️.fiction  
┆🕊️.demon  
┆🕊️.transformer  
┆🕊️.berry  
┆🕊️.thunder  
┆🕊️.magma  
┆🕊️.3dstone  
┆🕊️.neonlight  
┆🕊️.glitch  
┆🕊️.harrypotter  
┆🕊️.brokenglass  
┆🕊️.papercut  
┆🕊️.watercolor  
┆🕊️.multicolor  
┆🕊️.neondevil  
┆🕊️.underwater  
┆🕊️.graffitibike 
┆🕊️.snow  
┆🕊️.cloud  
┆🕊️.honey  
┆🕊️.ice  
┆🕊️.fruitjuice  
┆🕊️.biscuit  
┆🕊️.wood  
┆🕊️.chocolate  
┆🕊️.strawberry  
┆🕊️.matrix  
┆🕊️.blood  
┆🕊️.dropwater  
┆🕊️.toxic  
┆🕊️.lava  
┆🕊️.rock  
┆🕊️.bloodglas  
┆🕊️.hallowen  
┆🕊️.darkgold  
┆🕊️.joker  
┆🕊️.wicker 
┆🕊️.firework  
┆🕊️.skeleton  
┆🕊️.blackpink  
┆🕊️.sand  
┆🕊️.glue  
┆🕊️.1917  
┆🕊️.leaves 
┆🕊️.retro 
┆🕊️.pornhub 
┆🕊️.8bit 
┆🕊️.batman 
┆🕊️.3dbox 
┆🕊️.lion 
┆🕊️.3davengers 
┆🕊️.window 
┆🕊️.3dspace 
┆🕊️.bokeh 
┆🕊️.holographic 
┆🕊️.thewall 
┆🕊️.carbon 
┆🕊️.whitebear 
┆🕊️.metallic 
┆🕊️.steel 
┆🕊️.fabric 
┆🕊️.ancient 
┆🕊️.marvel 
╰–––––––––––––––༓

╭––『 𝐏𝐡𝐨𝐭𝐨𝐎𝐱𝐲 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.shadow  
┆🕊️.write  
┆🕊️.romantic  
┆🕊️.burnpaper 
┆🕊️.smoke  
┆🕊️.narutobanner  
┆🕊️.love  
┆🕊️.undergrass 
┆🕊️.doublelove  
┆🕊️.coffecup 
┆🕊️.underwaterocean 
┆🕊️.smokyneon 
┆🕊️.starstext 
┆🕊️.rainboweffect 
┆🕊️.balloontext 
┆🕊️.metalliceffect 
┆🕊️.embroiderytext 
┆🕊️.flamingtext 
┆🕊️.stonetext 
┆🕊️.writeart 
┆🕊️.summertext 
┆🕊️.wolfmetaltext 
┆🕊️.nature3dtext 
┆🕊️.rosestext 
┆🕊️.naturetypography 
┆🕊️.quotesunder 
┆🕊️.shinetext 
╰–––––––––––––––༓

╭––『 𝐄𝐩𝐡𝐨𝐭𝐨360 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.glitchtext 
┆🕊️.writetext 
┆🕊️.advancedglow 
┆🕊️.typographytext 
┆🕊️.pixelglitch 
┆🕊️.neonglitch 
┆🕊️.flagtext 
┆🕊️.flag3dtext 
┆🕊️.deletingtext 
┆🕊️.blackpinkstyle 
┆🕊️.glowingtext 
┆🕊️.underwatertext 
┆🕊️.logomaker 
┆🕊️.cartoonstyle 
┆🕊️.papercutstyle 
┆🕊️.watercolortext 
┆🕊️.effectclouds 
┆🕊️.blackpinklogo 
┆🕊️.gradienttext 
┆🕊️.summerbeach 
┆🕊️.luxurygold 
┆🕊️.multicoloredneon 
┆🕊️.sandsummer 
┆🕊️.galaxywallpaper 
┆🕊️.1917style 
┆🕊️.makingneon 
┆🕊️.royaltext 
┆🕊️.freecreate 
┆🕊️.galaxystyle 
┆🕊️.lighteffects 
╰–––––––––––––––༓

╭––『 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 』
┆🕊️.setcmd 
┆🕊️.delcmd 
┆🕊️.listcmd 
┆🕊️.lockcmd 
┆🕊️.addmsg 
┆🕊️.delmsg 
┆🕊️.getmsg 
┆🕊️.listmsg 
╰–––––––––––––––༓

╭––『 𝐁𝐮𝐠 & 𝐖𝐚𝐫 』
┆🕊️.resetotp 
┆🕊️.xbugp 
┆🕊️.xbugr 
╰–––––––––––––––༓

╭––『 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 』
┆🕊️.ping 
┆🕊️.menu 
┆🕊️.myip 
┆🕊️.reportbug 
┆🕊️.listpem 
┆🕊️.liststicker 
┆🕊️.listimage 
┆🕊️.listvideo 
┆🕊️.listvn 
┆🕊️.listbadword 
┆🕊️.listpc 
┆🕊️.listgc 
┆🕊️.owner 
┆🕊️.rentbot 
┆🕊️.listrentbot 
┆🕊️.donate 
┆🕊️.friend 
┆🕊️.obfuscate 
┆🕊️.styletext 
┆🕊️.fliptext 
┆🕊️.tts 
┆🕊️.say 
┆🕊️.togif 
┆🕊️.toqr 
┆🕊️.bass 
┆🕊️.blown 
┆🕊️.deep 
┆🕊️.earrape 
┆🕊️.fast 
┆🕊️.fat 
┆🕊️.nightcore 
┆🕊️.reverse 
┆🕊️.robot 
┆🕊️.slow 
┆🕊️.smooth 
┆🕊️.squirrel 
┆🕊️.tinyurl 
┆🕊️.tinyurl 
┆🕊️.tovn 
┆🕊️.toaudio 
┆🕊️.tomp3 
┆🕊️.tomp4
┆🕊️.toimg 
┆🕊️.toonce 
┆🕊️.sticker 
┆🕊️.take 
┆🕊️.emoji 
┆🕊️.volume 
┆🕊️.ebinary 
┆🕊️.dbinary 
┆🕊️.ssweb 
┆🕊️.quoted 
┆🕊️.runtime 
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐀𝐧𝐢𝐦𝐞 』
┆🕊️.akira 
┆🕊️.akiyama 
┆🕊️.ana ??
┆🕊️.asuna 
┆🕊️.ayuzawa 
┆🕊️.boruto 
┆🕊️.chiho 
┆🕊️.chitoge 
┆🕊️.cosplayloli 
┆🕊️.cosplaysagiri 
┆🕊️.deidara 
┆🕊️.doraemon 
┆🕊️.elaina 
┆🕊️.emilia 
┆🕊️.erza 
┆🕊️.gremory 
┆🕊️.hestia 
┆🕊️.hinata 
┆🕊️.husbu 
┆🕊️.inori 
┆🕊️.isuzu 
┆🕊️.itachi 
┆🕊️.itori 
┆🕊️.kaga 
┆🕊️.kagura 
┆🕊️.kakasih 
┆🕊️.kaori 
┆🕊️.keneki 
┆🕊️.kotori 
┆🕊️.kurumi 
┆🕊️.loli 
┆🕊️.madara 
┆🕊️.megumin 
┆🕊️.mikasa 
┆🕊️.mikey 
┆🕊️.miku 
┆🕊️.minato 
┆🕊️.naruto 
┆🕊️.neko 
┆🕊️.neko2 
┆🕊️.nekonime 
┆🕊️.nezuko 
┆🕊️.onepiece 
┆🕊️.pokemon 
┆🕊️.randomnime 
┆🕊️.randomnime2 
┆🕊️.rize 
┆🕊️.sagiri 
┆🕊️.sakura 
┆🕊️.sasuke 
┆🕊️.shina 
┆🕊️.shinka 
┆🕊️.shinomiya 
┆🕊️.shizuka 
┆🕊️.shota 
┆🕊️.tejina 
┆🕊️.toukachan 
┆🕊️.tsunade 
┆🕊️.waifu 
┆🕊️.animewall 
┆🕊️.yotsuba 
┆🕊️.yuki 
┆🕊️.yulibocil 
┆🕊️.yumeko 
┆🕊️.8ball 
┆🕊️.tickle 
┆🕊️.gecg 
┆🕊️.feed 
┆🕊️.animeawoo 
┆🕊️.animemegumin 
┆🕊️.animeshinobu 
┆🕊️.animehandhold 
┆🕊️.animehighfive 
┆🕊️.animecringe 
┆🕊️.animedance 
┆🕊️.animehappy 
┆🕊️.animeglomp 
┆🕊️.animeblush 
┆🕊️.animesmug 
┆🕊️.animewave 
┆🕊️.animesmille 
┆🕊️.animepoke 
┆🕊️.animewink 
┆🕊️.animebonk 
┆🕊️.animebully 
┆🕊️.animeyeet 
┆🕊️.animebite 
┆🕊️.animelick 
┆🕊️.animekill 
┆🕊️.animecry 
┆🕊️.animewlp 
┆🕊️.animekiss 
┆🕊️.animehug 
┆🕊️.animeneko 
┆🕊️.animepat 
┆🕊️.animeslap 
┆🕊️.animecuddle 
┆🕊️.animewaifu 
┆🕊️.animenom 
┆🕊️.animefoxgirl 
┆🕊️.animegecg 
┆🕊️.animetickle 
┆🕊️.animefeed 
┆🕊️.animeavatar 
┆🕊️.genshin 
┆🕊️.anime 
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 🧑‍🎓𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮🧑‍🎓 』
┆🕊️.self 
┆🕊️.public 
┆🕊️.join 
┆🕊️.bctext 
┆🕊️.poll 
┆🕊️.bcimage 
┆🕊️.bcvideo 
┆🕊️.creategc 
┆🕊️.userjid 
┆🕊️.setexif 
┆🕊️.setbotname 
┆🕊️.setbotbio 
┆🕊️.delppbot 
┆🕊️.shutdown 
┆🕊️.setppbot 
┆🕊️.addprem 
┆🕊️.delprem 
┆🕊️.addowner 
┆🕊️.delowner 
┆🕊️.addvn 
┆🕊️.delvn 
┆🕊️.addsticker 
┆🕊️.delsticker 
┆🕊️.addimage 
┆🕊️.delimage 
┆🕊️.addvideo 
┆🕊️.delvideo 
┆🕊️.block 
┆🕊️.unblock del 
┆🕊️.leavegc 
┆🕊️.pushcontact 
┆🕊️.pushcontactv2 
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 』
┆🕊️.ping 
┆🕊️.menu 
┆🕊️.myip 
┆🕊️.reportbug 
┆🕊️.listpem 
┆🕊️.liststicker 
┆🕊️.listimage 
┆🕊️.listvideo 
┆🕊️.listvn 
┆🕊️.listbadword 
┆🕊️.listpc 
┆🕊️.listgc 
┆🕊️.owner 
┆🕊️.rentbot 
┆🕊️.listrentbot 
┆🕊️.donate 
┆🕊️.friend 
┆🕊️.obfuscate 
┆🕊️.styletext 
┆🕊️.fliptext 
┆🕊️.tts 
┆🕊️.say 
┆🕊️.togif 
┆🕊️.toqr 
┆🕊️.bass 
┆🕊️.blown 
┆🕊️.deep 
┆🕊️.earrape 
┆🕊️.fast 
┆🕊️.fat 
┆🕊️.nightcore 
┆🕊️.reverse 
┆🕊️.robot 
┆🕊️.slow 
┆🕊️.smooth 
┆🕊️.squirrel 
┆🕊️.tinyurl 
┆🕊️.tinyurl 
┆🕊️.tovn 
┆🕊️.toaudio 
┆🕊️.tomp3 
┆🕊️.tomp4
┆🕊️.toimg 
┆🕊️.toonce 
┆🕊️.sticker 
┆🕊️.take 
┆🕊️.emoji 
┆🕊️.volume 
┆🕊️.ebinary 
┆🕊️.dbinary 
┆🕊️.ssweb 
┆🕊️.quoted 
┆🕊️.runtime 
┆🕊️.sound1 - sound161 
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 📩𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮📩 』
┆🕊️.ytsearch 
┆🕊️.play 
┆🕊️.ytmp3 
┆🕊️.ytmp4 
┆🕊️.google 
┆🕊️.imdb 
┆🕊️.weather 
┆🕊️.wanumber 
┆🕊️.instaimg 
┆🕊️.instavid 
┆🕊️.fbvid 
┆🕊️.twittervid 
┆🕊️.telestick 
┆🕊️.spotify 
┆🕊️.gitclone 
┆🕊️.happymod 
┆🕊️.gdrive 
┆🕊️.pinterest 
┆🕊️.ringtone 
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 🤹𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮🤹 』
┆🕊️.antilink 
┆🕊️.antiwame 
┆🕊️.grouplink 
┆🕊️.invite 
┆🕊️.ephemeral 
┆🕊️.delete 
┆🕊️.setppgroup 
┆🕊️.delppgroup 
┆🕊️.setname 
┆🕊️.setdesc 
┆🕊️.add 
┆🕊️.kick 
┆🕊️.promote 
┆🕊️.demote 
┆🕊️.hidetag 
┆🕊️.totag 
┆🕊️.tagall 
┆🕊️.editinfo 
┆🕊️.opentime 
┆🕊️.closetime 
┆🕊️.resetlink 
┆🕊️.getbio 
┆🕊️.vote 
┆🕊️.upvote 
┆🕊️.downvote 
┆🕊️.checkvote 
┆🕊️.delvote 
┆🕊️.autostickergc 
┆🕊️.antilinkgc 
┆🕊️.antiwame 
┆🕊️.antilinkall 
┆🕊️.antilinktiktok 
┆🕊️.antilinkfb 
┆🕊️.antilinktwitter 
┆🕊️.antilinkig 
┆🕊️.antlinktg 
┆🕊️.antilinkytvid 
┆🕊️.antilinkytch 
┆🕊️.antivirus 
┆🕊️.antitoxic 
┆🕊️.nsfw 
┆🕊️.react 
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 』
┆🕊️.define 
┆🕊️.qc 
┆🕊️.lyrics 
┆🕊️.tictactoe 
┆🕊️.suit 
┆🕊️.math 
┆🕊️.fact 
┆🕊️.truth 
┆🕊️.dare 
┆🕊️.couple 
┆🕊️.soulmate 
┆🕊️.stupidcheck 
┆🕊️.handsomecheck 
┆🕊️.uncleancheck 
┆🕊️.hotcheck 
┆🕊️.smartcheck 
┆🕊️.greatcheck 
┆🕊️.evilcheck 
┆🕊️.dogcheck 
┆🕊️.coolcheck 
┆🕊️.waifucheck 
┆🕊️.awesomecheck 
┆🕊️.gaycheck 
┆🕊️.cutecheck 
┆🕊️.lesbiancheck 
┆🕊️.hornycheck 
┆🕊️.prettycheck 
┆🕊️.lovelycheck 
┆🕊️.uglycheck 
┆🕊️.pick 
┆🕊️.quotes 
┆🕊️.can 
┆🕊️.is 
┆🕊️.when 
┆🕊️.where 
┆🕊️.what 
┆🕊️.how 
┆🕊️.rate 
┆🕊️.cry 
┆🕊️.kill 
┆🕊️.hug 
┆🕊️.pat 
┆🕊️.lick  
┆🕊️.kiss 
┆🕊️.bite 
┆🕊️.yeet 
┆🕊️.bully 
┆🕊️.bonk 
┆🕊️.wink 
┆🕊️.poke 
┆🕊️.nom 
┆🕊️.slap 
┆🕊️.smile  
┆🕊️.wave 
┆🕊️.awoo 
┆🕊️.blush 
┆🕊️.smug 
┆🕊️.glomp  
┆🕊️.happy 
┆🕊️.dance 
┆🕊️.cringe 
┆🕊️.cuddle 
┆🕊️.highfive  
┆🕊️.shinobu 
┆🕊️.handhold 
┆🕊️.spank 
┆🕊️.tickle 
┆🕊️.avatar 
┆🕊️.feed 
┆🕊️.foxgirl 
┆🕊️.gecg 
┆🕊️.checkme 
┆🕊️.sound1 - sound161 
╰–––––––––––––––༓
`}

global.Stalkermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 ☃️𝐒𝐭𝐚𝐥𝐤𝐞𝐫☃️ 』
┆🕊️.igstalk 
┆🕊️.ffstalk 
┆🕊️.mlstalk 
┆🕊️.npmstalk 
┆🕊️.ghstalk 
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 』
┆🕊️.goose 
┆🕊️.woof 
┆🕊️.8ball 
┆🕊️.lizard 
┆🕊️.meow 
┆🕊️.gura 
┆🕊️.doge 
┆🕊️.patrick 
┆🕊️.lovestick 
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 Database 』
┆🕊️.setcmd 
┆🕊️.delcmd 
┆🕊️.listcmd 
┆🕊️.lockcmd 
┆🕊️.addmsg 
┆🕊️.delmsg 
┆🕊️.getmsg 
┆🕊️.listmsg 
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐎𝐩𝐞𝐧𝐀𝐈 』
┆🕊️.openai 
┆🕊️.ai 
┆🕊️.aimage 
┆🕊️.remini 
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐁𝐮𝐠 & 𝐖𝐚𝐫 』
┆🕊️.resetotp 
┆🕊️.xbugp 
┆🕊️.xbugr 
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 📸𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨📸 』
┆🕊️.aesthetic 
┆🕊️.coffee 
┆🕊️.wikimedia 
┆🕊️.wallpaper 
┆🕊️.art 
┆🕊️.bts 
┆🕊️.dogwoof 
┆🕊️.catmeow 
┆🕊️.lizardpic 
┆🕊️.goosebird 
┆🕊️.8ballpool 
┆🕊️.cosplay 
┆🕊️.hacker 
┆🕊️.cyber 
┆🕊️.gamewallpaper 
┆🕊️.islamic 
┆🕊️.jennie 
┆🕊️.jiso 
┆🕊️.satanic 
┆🕊️.justina 
┆🕊️.cartoon 
┆🕊️.pentol 
┆🕊️.cat 
┆🕊️.kpop 
┆🕊️.exo 
┆🕊️.lisa 
┆🕊️.space 
┆🕊️.car 
┆🕊️.technology 
┆🕊️.bike 
┆🕊️.shortquote 
┆🕊️.antiwork 
┆🕊️.hacking 
┆🕊️.boneka 
┆🕊️.rose 
┆🕊️.ryujin 
┆🕊️.ulzzangboy 
┆🕊️.ulzzanggirl 
┆🕊️.wallml 
┆🕊️.wallphone 
┆🕊️.mountain 
┆🕊️.goose 
┆🕊️.profilepic 
┆🕊️.couplepic 
┆🕊️.programming 
┆🕊️.pubg 
┆🕊️.blackpink 
┆🕊️.randomboy   
┆🕊️.randomgirl 
┆🕊️.hijab   
┆🕊️.chinese 
┆🕊️.indo 
┆🕊️.japanese 
┆🕊️.korean 
┆🕊️.malay 
┆🕊️.thai 
┆🕊️.vietnamese 
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 🎬𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨🎬』
┆🕊️.tiktokgirl 
┆🕊️.tiktoknukthy 
┆🕊️.tiktokkayes 
┆🕊️.tiktokpanrika 
┆🕊️.tiktoknotnot 
┆🕊️.tiktokghea 
┆🕊️.tiktoksantuy 
┆🕊️.tiktokbocil 
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐓𝐞𝐱𝐭𝐩𝐫𝐨 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.candy  
┆🕊️.christmas  
┆🕊️.3dchristmas  
┆🕊️.sparklechristmas 
┆🕊️.deepsea  
┆🕊️.scifi  
┆🕊️.rainbow  
┆🕊️.waterpipe  
┆🕊️.spooky  
┆🕊️.pencil  
┆🕊️.circuit  
┆🕊️.discovery  
┆🕊️.metalic  
┆🕊️.fiction  
┆🕊️.demon  
┆🕊️.transformer  
┆🕊️.berry  
┆🕊️.thunder  
┆🕊️.magma  
┆🕊️.3dstone  
┆🕊️.neonlight  
┆🕊️.glitch  
┆🕊️.harrypotter  
┆🕊️.brokenglass  
┆🕊️.papercut  
┆🕊️.watercolor  
┆🕊️.multicolor  
┆🕊️.neondevil  
┆🕊️.underwater  
┆🕊️.graffitibike 
┆🕊️.snow  
┆🕊️.cloud  
┆🕊️.honey  
┆🕊️.ice  
┆🕊️.fruitjuice  
┆🕊️.biscuit  
┆🕊️.wood  
┆🕊️.chocolate  
┆🕊️.strawberry  
┆🕊️.matrix  
┆🕊️.blood  
┆🕊️.dropwater  
┆🕊️.toxic  
┆🕊️.lava  
┆🕊️.rock  
┆🕊️.bloodglas  
┆🕊️.hallowen  
┆🕊️.darkgold  
┆🕊️.joker  
┆🕊️.wicker 
┆🕊️.firework  
┆🕊️.skeleton  
┆🕊️.blackpink  
┆🕊️.sand  
┆🕊️.glue  
┆🕊️.1917  
┆🕊️.leaves 
┆🕊️.retro 
┆🕊️.pornhub 
┆🕊️.8bit 
┆🕊️.batman 
┆🕊️.3dbox 
┆🕊️.lion 
┆🕊️.3davengers 
┆🕊️.window 
┆🕊️.3dspace 
┆🕊️.bokeh 
┆🕊️.holographic 
┆🕊️.thewall 
┆🕊️.carbon 
┆🕊️.whitebear 
┆🕊️.metallic 
┆🕊️.steel 
┆🕊️.fabric 
┆🕊️.ancient 
┆🕊️.marvel 
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐏𝐡𝐨𝐭𝐨𝐎𝐱𝐲 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.shadow  
┆🕊️.write  
┆🕊️.romantic  
┆🕊️.burnpaper 
┆🕊️.smoke  
┆🕊️.narutobanner  
┆🕊️.love  
┆🕊️.undergrass 
┆🕊️.doublelove  
┆🕊️.coffecup 
┆🕊️.underwaterocean 
┆🕊️.smokyneon 
┆🕊️.starstext 
┆🕊️.rainboweffect 
┆🕊️.balloontext 
┆🕊️.metalliceffect 
┆🕊️.embroiderytext 
┆🕊️.flamingtext 
┆🕊️.stonetext 
┆🕊️.writeart 
┆🕊️.summertext ??
┆🕊️.wolfmetaltext 
┆🕊️.nature3dtext 
┆🕊️.rosestext 
┆🕊️.naturetypography 
┆🕊️.quotesunder 
┆🕊️.shinetext 
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐄𝐩𝐡𝐨𝐭𝐨360 𝐌𝐚𝐤𝐞𝐫 』
┆🕊️.glitchtext 
┆🕊️.writetext 
┆🕊️.advancedglow 
┆🕊️.typographytext 
┆🕊️.pixelglitch 
┆🕊️.neonglitch 
┆🕊️.flagtext 
┆🕊️.flag3dtext 
┆🕊️.deletingtext 
┆🕊️.blackpinkstyle 
┆🕊️.glowingtext 
┆🕊️.underwatertext 
┆🕊️.logomaker 
┆🕊️.cartoonstyle 
┆🕊️.papercutstyle 
┆🕊️.watercolortext 
┆🕊️.effectclouds 
┆🕊️.blackpinklogo 
┆🕊️.gradienttext 
┆🕊️.summerbeach 
┆🕊️.luxurygold 
┆🕊️.multicoloredneon 
┆🕊️.sandsummer 
┆🕊️.galaxywallpaper 
┆🕊️.1917style 
┆🕊️.makingneon 
┆🕊️.royaltext 
┆🕊️.freecreate 
┆🕊️.galaxystyle 
┆🕊️.lighteffects 
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
 = For Premium User

╭––『 𝐀𝐧𝐢𝐦𝐞 𝐍𝐒𝐅𝐖 』
┆🕊️.hentai 
┆🕊️.gifhentai 
┆🕊️.gifblowjob 
┆🕊️.hentaivid 
┆🕊️.hneko 
┆🕊️.nwaifu 
┆🕊️.animespank 
┆🕊️.trap 
┆🕊️.gasm 
┆🕊️.ahegao 
┆🕊️.ass 
┆🕊️.bdsm 
┆🕊️.blowjob 
┆🕊️.cuckold 
┆🕊️.cum 
┆🕊️.milf 
┆🕊️.eba 
┆🕊️.ero 
┆🕊️.femdom 
┆🕊️.foot 
┆🕊️.gangbang 
┆🕊️.glasses 
┆🕊️.jahy 
┆🕊️.masturbation 
┆🕊️.manga 
┆🕊️.neko-hentai 
┆🕊️.neko-hentai2 
┆🕊️.nsfwloli 
┆🕊️.orgy 
┆🕊️.panties  
┆🕊️.pussy 
┆🕊️.tentacles 
┆🕊️.thighs 
┆🕊️.yuri 
┆🕊️.zettai 
┆🕊️.xnxxsearch 
┆🕊️.xnxxdl 
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
