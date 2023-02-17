
"use strict";

/*

function startTimer () {
    timer.start();
    setTimeout(stopTimer,5000);
}

function stopTimer () {
    timer.stop();
}

*/

function finish() {
	window.location.href = "/app2.html";
	}	
	
	
		
function right(){
	
	var vref = document.getElementById('view');
	vref.innerHTML = "<p>blau</p>";
	vref.style.backgroundColor = "blue";
	vref.style.color = "green";
	document.getElementById('foot').innerHTML = "RICHTIG ! - Nächste Aufgabe";
	
	annyang.addCallback('resultNoMatch', finish);
	var commands = {
      'grün': finish,
	  'blau': finish, };
	  
	annyang.init(commands, true);
	  
	annyang.start();
	  
	  
	
	
}	

function failed(){
	
	var vref = document.getElementById('view');
	vref.innerHTML = "<p>blau</p>";
	vref.style.backgroundColor = "blue";
	vref.style.color = "green";
	document.getElementById('foot').innerHTML = "FALSCH !, nicht die Farbe der Schrift - Nächste Aufgabe";
	
	annyang.addCallback('resultNoMatch', finish);
	var commands = {
      'grün': finish,
	  'blau': finish, };
	  
	annyang.init(commands, true);
	  
	annyang.start();
	  
	
	
}

	
	



function startTest() {
	
	//Seitentext ändern
	document.getElementById('head').innerText = "Welche Farbe hat das Wort ?";
	var vref = document.getElementById('view'); 
	document.getElementById('foot').innerHTML = "Erlauben sie den Zugriff aufs Mikrophon und antworten sie JETZT in einem Wort";
    vref.innerHTML = "<p>gelb</p>";	
	vref.style.backgroundColor = "green";
	vref.style.color = "yellow";
	
	//Sprachbefehl erstellen
   	if (annyang) {
    
	annyang.debug();
	annyang.addCallback('resultNoMatch', failed);
		
	var commands = {
      'gelb': right,
      'grün': failed,
                       };
					   
	  annyang.addCommands(commands);
	  annyang.setLanguage('de');
	  annyang.start();
		
		
	} else { alert(' annyang failed !'); }
	
}


 