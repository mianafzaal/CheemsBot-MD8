const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['923430436852'] //ur owner number
global.ownernomer = "923430436852" //ur owner number2
global.ownername = "©᭄𝑴𝒊𝒂𝒏🌸ོ" //ur owner name
global.ytname = "YT: https://www.youtube.com/@BLACKPINKEDITR" //ur yt chanel name
global.socialm = "Instagram: its_mian__07" //ur github or insta name
global.location = "Pakistan, Lahore" //ur location

//new
global.botname = "᭄﹝ᯤ﹞𝐃𝗂𝗅𝗋𝗎𝖻𝗈⃞̸𝅄🔭𓆩ʙᴏᴛ𓆪🌺💃"
global.ownernumber = '923430436852'
global.ownername = '©᭄𝑴𝒊𝒂𝒏🌸ོ'
global.ownerNumber = ["923430436852@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@"
global.websitex = "https://www.youtube.com/"
global.wagc = "https://Ws.me/923430436852"
global.themeemoji = '👻'
global.wm = "Mian Bot Inc."
global.botscript = 'https://www.youtube.com/@BLACKPINKEDITR' //script link
global.packname = "𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑩𝒚"
global.author = "©᭄𝑴𝒊𝒂𝒏🌸ོ\n\n+923430436852"
global.creator = "923430436852@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '𝐇𝐞𝐫𝐞 𝐲𝐨𝐮 𝐠𝐨!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
