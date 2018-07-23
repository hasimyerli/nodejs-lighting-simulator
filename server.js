var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var lampArray = new Array();
for (var i = 0; i < 12; i++) {
  lampArray[i] = new Array(true,1,5);//lampArray[0] -> tıklanmayı 5 saniyeliğine bloke etmek için. //lampArray[1] -> lambanın açık kapalı olma durumu //lampArray[2] -> lambanın aktif olması için kalan süre
}

io.on('connection', function(socket) {
  socket.emit('getLampAllStatus',lampArray); //sokete her bağlanan client a lambaların son durumunu gönderir.
  socket.on('clientRequest', function(data) {
    if (lampArray[data.lamp_id][0]) { //lamba tıklanmışsa.
      (lampArray[data.lamp_id][1] == 0) ? (lampArray[data.lamp_id][1] = 1) : (lampArray[data.lamp_id][1] = 0); //bu kısım renklerin değişimini belirler.
      lampArray[data.lamp_id][0] = false; //lamba tıklandığında false ve tıklanamaz durumuna geçer.
      io.emit('lampStatus', data,lampArray); //lambanın açık yada kapalı olma durumunu client e gönderir.
      LampTimer (data,data.lamp_id); //serverdaki timeri başlatır.
    }
  });
});

//lambanın aktif olması için kalan süreyi hesaplar.
function LampTimer (data,lamp_id) {
  var count = lampArray[lamp_id][2];
  var _timer = setInterval(function(){
    count--;
    lampArray[lamp_id][2] = count;
    io.emit('lampStatus', data,lampArray); //lambanın açık yada kapalı olma durumunu tüm client e gönderir.
    if(count == 0){
      lampArray[lamp_id][0] = true; // 5 saniye sonra butonu aktif yapar.
      lampArray[lamp_id][2] = 5; //5 saniye sonra lambanın kalan süresini resetledik.
      clearInterval(_timer);
    }
    console.log(lampArray[lamp_id][2]);
  },1000);
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
