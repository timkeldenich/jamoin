
function preload(){

}
var RQ;
var google;
var Pnce = 0;
var write;
var b = 250;
var werite;
var schreiben;
var moin=0;
var m=0;

var text='-  INeverDid  -\n-  HabNochNie  -\n\n\n';
var text2='Regeln:\nEs wird eine Behauptung\n aufgestellt ( Bsp.\nIch hab noch nie\n etwas gegessen,\nhast du es doch getan\nmusst du 1 Schluck\ntrinken. )';

//var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var style = { font: "65px Arial", fill: "#333333", align: "center" };
var style2 = { font: "35px Arial", fill: "#333333", align: "center" };


function create(){
	showBannerFunc();
    showInterstitialFunc();
	if (game.device.desktop == false) {
            // Set the scaling mode to SHOW_ALL to show all the game
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
            // Set a minimum and maximum size for the game
            // Here the minimum is half the game size
            // And the maximum is the original game size
            game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
        }
	
google = game.add.sprite(0,1153,'google');
google.scale.setTo(0.667, 1);
game.stage.backgroundColor = "#F7F7F7";

//text schreiben text==was steht / style== größe, schriftart, farbe, zentrierung 
// t== wo steht die schrift


texter();


}
function update(){
game.input.onDown.addOnce(click, this);

//		player.body.velocity.y = - 1470;
//	}else{player.body.velocity.y= + 1470; }
	}

function click(){
	if (m==0){
	schreiben.destroy();
	}
	write.destroy();
	m++;
	var min = 0;
	var max = 51;
	var moin = Math.round(Math.random() * (max - min)) + min;
if(moin ==0){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\netwas\ngetrunken.';
	plus2();

	}
else if(moin ==1){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmeine Zaehne\nheute\ngeputzt.';
	plus2();
	}	
else if(moin ==2){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nbetrunken\nAuto\ngefahren.';
	plus2();
	}	
else if(moin ==3){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nerzaehlt\nich bin in\n1 Beziehung\ndamit mich\nniemand\nanbaggert.';
	plus2();	
	}	
else if(moin ==4){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\n1 Sexangebot\nbekommen\nvon\n1 Mitschueler/in.';
	plus2();	
	}	
else if(moin ==5){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\n Sex beim\nersten Date';
	plus2();
}
else if(moin == 6){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\njemanden beim\nSex gehoert';
	plus2();
}
else if(moin == 7){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\n1 Buch gelesen\n mit mehr als\n1000 Seiten';
	plus2();
}
else if(moin == 8){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nbei der\nPolizei\n angerufen';
	plus2();
}
else if(moin == 9){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmit mehr als\n Person in\n1 Nacht \nrum gemacht';
	plus2();
}
else if(moin == 10){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nHandschellen\nbeim\n Sex benutzt';
	plus2();
} 
else if(moin == 11){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nBei der\nFeuerwehr\n angerufen';
	plus2();
} 
else if(moin == 12){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\ndie Zigarette\nauf der\n falschen Seite\nangemacht';
	plus2();
} 
else if(moin == 13){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\ngewuenscht\nSingle zu sein';
	plus2();
}
else if(moin == 14){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmir ein\nTattoo\ngewuenscht';
	plus2();
} 
else if(moin == 15){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nBei der\nFeuerwehr\n angerufen';
	plus2();
} 
else if(moin == 16){
	text = '-  INeverDid  -\n-  BinNochNie  -\n\n\neingeschlafen\nim Kino ';
	plus2();
} 
else if(moin == 17){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nins\nSchwimmbad\ngepinkelt';
	plus2();
}
else if(moin == 18){
	text = '-  INeverDid  -\n-  WarNochNie  -\n\n\nsuechtig';
	plus2();
} 
else if(moin == 19){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmeine Eltern\nbetrunken\nerlebt';
	plus2();
} 
else if(moin == 20){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nBei der\nFeuerwehr\n angerufen';
	plus2();
} 
else if(moin == 21){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nein Date aus\nMitleid gehabt';
	plus2();
} 
else if(moin == 22){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nDrogen\ngenommen';
	plus2();
} 
else if(moin == 23){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nein Haustier\n gehabt';
	plus2();
} 
else if(moin == 24){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\ngerne Schmuck\ngetragen';
	plus2();
} 
else if(moin == 25){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nvon Alkohol\ngekotzt';
	plus2();
} 
else if(moin == 26){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\neinen\nFuehrerschein\ngemacht';
	plus2();
} 
else if(moin == 27){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nein Auto\nbessesen';
	plus2();
} 
else if(moin == 28){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nWhatsapp auf\ndem Handy\ngehabt';
	plus2();
} 
else if(moin == 29){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nDienge in\ndiesem Spiel\nPreis gegeben\ndie niemand\nwissen sollte';
	plus2();
} 
else if(moin == 30){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nPlaystation\nbesser als\nXbox gefunden';
	plus2();
} 
else if(moin == 31){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\neinen Unfall\ngehabt';
	plus2();
} 
else if(moin == 32){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nSex im freien\ngehabt';
	plus2();
} 
else if(moin == 33){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nIn einer\nQuizshow\ngewonne';
	plus2();
} 
else if(moin == 34){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nAuf der Kirmes\neinen riesigen\nTeddy\ngewonnen';
	plus2();
} 
else if(moin == 35){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nVon einem\nFahrgeschaeft\ngekotzt';
	plus2();
} 
else if(moin == 36){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\ngewaehlt';
	plus2();
} 
else if(moin == 37){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nSexspielzeug\ngekauft';
	plus2();
} 
else if(moin == 38){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nden\nBarkeeper\nangeflirtet';
	plus2();
} 
else if(moin == 39){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nSex auf dem\nSchreibtisch';
	plus2();
} 
else if(moin == 40){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\ngedacht meine\nBrueste/Penis\nwaeren zu\nklein';
	plus2();
} 
else if(moin == 41){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nin einer\nGartenlaube\nSex gehabt';
	plus2();
} 
else if(moin == 42){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\neine\nSexhotline\nangerufen';
	plus2();
} 
else if(moin == 43){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmit jemandem\nrumgemacht\nweil ich\nnichts besseres\nzu tun hatte';
	plus2();
} 
else if(moin == 44){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\njemanden\nvom gleichen\nGeschlecht\ngekuesst';
	plus2();
} 
else if(moin == 45){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nauf dem Tisch\ngetanzt';
	plus2();
} 
else if(moin == 46){
	text = '-  INeverDid  -\n-  WarNochNie  -\n\n\nim\nPartyurlaub';
	plus2();
} 
else if(moin == 47){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nin der\nletzen\nWoche betrunken';
	plus2();
} 
else if(moin == 48){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nmich in\neinem Auto\nuebergeben';
	plus2();
} 
else if(moin == 49){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nwaehrend des\nSexes laut\nlosgelacht';
	plus2();
} 
else if(moin == 50){
	text = '-  INeverDid  -\n-  HabNochNie  -\n\n\nein Spiel\nprogrammiert';
	plus2();
} 

texter();
console.log(moin);

} 

	
	
	

function texter(){
	
	
  	write = game.add.text(game.world.centerX-250, game.world.centerY-450,text,style);
  	if (m==0){
  	schreiben = game.add.text(game.world.centerX-200, game.world.centerY-250,text2,style2);
  }
}
function plus2(){
	//moin++;

}
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial 
function showInterstitialFunc(){
    window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded. 
    window.plugins.AdMob.requestInterstitialAd();
}
} 
