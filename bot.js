const Eris = require("eris");
var x5bzteam = new Eris("MzY5MTE4OTIxMTUzOTcwMTc3.DvfKAA.YufBni_hfwmHvM1rd2bMUZVsHGc");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "451767386144768022";
nick = "كسمك احمر وعجبني هه";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();