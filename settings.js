require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285175463174"
global.dbowner = "./all/database/owner.json"
global.dbprem = './all/database/premium.json'
global.namaowner = "SunShine"
//======== Setting Bot & Link ========//
global.namabot = "SunaBot" 
global.idsaluran = false
global.linkgc = 'https://chat.whatsapp.com/F4FiG8wL9QI5uqfx2dlPne'
global.packname = "SunShine"
global.author = "SunShine"
//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500
//========= Setting Url Foto =========//
global.image = "https://telegra.ph/file/9026564676a02d2cf5f23.jpg"
//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://rickixbarxaditxalfariss.dewapanel.my.id"
global.domain2 = "rickixbarxaditxalfariss.dewapanel.my.id" //no https
global.apikey = "ptla_i1DPQPyt6PrNaawKXWmI3vobgB0AIt798X3b3JARSEz"
global.capikey = "ptlc_bXtnSf0biAur21aOocYRd6ShSYRDeN5SEm70ysTJ7Dv"
//========= Setting Payment =========//
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.shopeepay = "-"
global.qris = "https://telegra.ph/file/9b396aaa645f5b4652d06.jpg"
global.bri = "-"
global.syarat1 = "SERTAKAN BUKTI TF"
global.syarat2 = "ALL TRX NO REFUND"
//=========== Api Domain ===========//
global.zone1 = "-"
global.apitoken1 = "-"
global.tld1 = "-"
//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";
global.cgp16 = "6"
global.cgp32 = "2882870"
global.cgp64 = "91943"
//============ Alpabeth ============//
global.pzm = "A"
global.kbh = "B"
global.obp = "C"
global.mkq = "D"
global.epo = "E"
global.hjr = "F"
global.mdm = "G"
global.knt = "H"
global.jmb = "I"
global.sci = "J"
global.dby = "K"
global.zhr = "L"
global.jup = "M"
global.mel = "N"
global.nic = "O"
global.vpd = "P"
global.zqq = "Q"
global.kbs = "R"
global.pxd = "S"
global.ytm = "T"
global.ytv = "U"
global.hdh = "V"
global.wkw = "W"
global.jir = "X"
global.lah = "Y"
global.kok = "Z"
global.pza = "a"
global.kbb = "b"
global.obc = "c"
global.mkd = "d"
global.epe = "e"
global.hjf = "f"
global.mdg = "g"
global.knh = "h"
global.jmi = "i"
global.scj = "j"
global.dbk = "k"
global.zhl = "l"
global.jum = "m"
global.men = "n"
global.nio = "o"
global.vpp = "p"
global.zqp = "q"
global.kbr = "r"
global.pxs = "s"
global.ytt = "t"
global.ytu = "u"
global.hdv = "v"
global.wkm = "w"
global.jix = "x"
global.lay = "y"
global.koz = "z"
//========= Setting Message =========//
global.msg = {
"error": "Error wak",
"done": "Data udah di ambil", 
"wait": "Bntar wak..", 
"group": "Khusus Grup aja", 
"private": "Khusus Pm aja", 
"admin": "Lu ae bukan admin kocak", 
"adminbot": "Gw bukan admin cok", 
"owner": "Lu ae bukan owner pler", 
"developer": "Khusus dev"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

// Script remake by verlangid yt:@ErlanggaWater
// Original credit by Skyzo